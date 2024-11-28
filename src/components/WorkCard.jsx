import React, { useEffect, useRef } from "react";

const WorkCard = ({ vid, tech, name, web, git, i, onVideoLoad }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Ensure video autoplay and loop are set
    if (videoElement) {
      videoElement.loop = true;
      videoElement.muted = true;
    }

    const handlePlayPause = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement?.play();
        } else {
          videoElement?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // Trigger when at least 50% of the video is visible
    });

    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <>
      <div className="border-t-2 border-gray-700 mt-20">
        <p className="text-white mt-6 text-sm sm:text-lg">
          0{i}/<span className="text-gray-400">05</span>
        </p>
        <h1 className="text-white text-[10vw] sm:text-[6vw] lg:text-[4vw] kanit-extrabold mt-2">
          {name.toUpperCase()}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Tech Stack Section */}
        <div className="lg:w-[25%] w-full text-white flex flex-col items-start lg:items-end">
          <p className="text-base sm:text-lg">[Tech Stack]</p>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">{tech}</p>
          <div className="flex flex-row lg:flex-col justify-between lg:items-end w-full lg:w-auto mt-6 gap-2 lg:gap-4">
            <a
              href={web}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm sm:text-base hover:text-gray-300"
            >
              Visit Website
            </a>
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm sm:text-base hover:text-gray-300"
            >
              View Code
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="lg:w-[75%] w-full">
          <video
            ref={videoRef}
            src={vid}
            className="rounded-l-full w-full"
            onLoadedData={onVideoLoad}
          ></video>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
