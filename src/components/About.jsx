import React from "react";
import video2 from "../assets/video-2.mp4";

const About = () => {
  return (
    <div id="about" className="w-[90%] pb-32 border-b-2 border-gray-200 mx-auto">
      {/* Header Section */}
      <div className="cousine w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-lg font-thin pt-2">
        <p>About</p>
        <p className="sm:mt-0 mt-2">02/<span className="text-gray-400">05</span></p>
      </div>

      {/* Video and Title Section */}
      <div className="w-full pt-14 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Video */}
        <video
          loop
          muted
          autoPlay
          src={video2}
          className="w-full sm:w-[50%] lg:w-[25%] rounded-r-full"
        ></video>

        {/* Title */}
        <h1 className="text-white text-[12vw] sm:text-[8vw] lg:text-[6vw] kanit-extrabold text-center lg:text-left">
          ABOUT ME
        </h1>
      </div>

      {/* Text Section */}
      <div className="mt-20 px-4 sm:px-0">
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-white text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quia, aliquam, accusamus labore dicta delectus, illo odit non exercitationem recusandae magnam sequi. Voluptatibus et doloribus debitis neque nam dolor fugit labore molestias est, vitae nesciunt, quae sed! Odit beatae est tempore nihil a? Et provident repellendus laboriosam harum saepe quod!
        </h1>
      </div>
    </div>
  );
};

export default About;
