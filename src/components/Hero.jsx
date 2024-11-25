import React from "react";
import video1 from "../assets/video-1.mp4";

const Hero = ({ onVideoLoad }) => {
  return (
    <div
      id="hero"
      className="w-[90%] pt-14 pb-32 border-b-2 border-gray-200 mx-auto"
    >
      {/* Section 1: Title */}
      <div className="w-full">
        <p className="text-white text-lg font-thin pl-2">SOFTWARE</p>
      </div>
      <div>
        <h1 className="text-white kanit-extrabold leading-[11vw] text-[16.5vw] ">
          DEVELOPER
        </h1>
      </div>

      {/* Section 2: Subtext */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 cousine">
        {/* Always visible */}
        <p className="text-white text-lg font-thin pl-2 text-center sm:text-left">
          Based in Madhya Pradesh, India
        </p>

        {/* Hidden on mobile, visible on small screens and above */}
        <p className="hidden sm:block text-white text-lg font-thin text-center sm:text-left">
          01/<span className="text-gray-400">05</span>
        </p>
        <p className="hidden sm:block text-white text-lg font-thin text-center sm:text-left">
          Scroll to explore
        </p>
      </div>

      {/* Section 3: Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between pt-20 items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-[60%] text-center lg:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl">
            <span className="text-gray-400 font-thin">
              Bringing together strategy, creativity{" "}
              <br className="hidden lg:block" />
              and technology to
            </span>{" "}
            build digital products, websites, and apps that{" "}
            <br className="hidden lg:block" />
            make sense to businesses and people.
          </h1>
        </div>

        {/* Video Section */}
        <div className="lg:w-[35%] w-full flex justify-center">
          <video
            src={video1}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            onLoadedData={onVideoLoad}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
