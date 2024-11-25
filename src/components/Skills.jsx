import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-[90%] border-b-2 border-gray-200 pb-10">
      {/* Header Section */}
      <div className="cousine w-full flex justify-between items-center text-white text-base sm:text-lg font-thin pt-2">
        <p>Skills</p>
        <p>
          03/<span className="text-gray-400">05</span>
        </p>
      </div>

      {/* Intro Section */}
      <div className="w-full flex justify-end mt-14 sm:mt-28 mb-6 sm:mb-10">
        <h1
          className="text-xl sm:text-5xl w-full sm:w-[70%] text-white"
          style={{
            lineHeight: "1.5em",
          }}
        >
          <span className="text-gray-400">
            My experience and vast range of services <br className="hidden sm:block" /> help
          </span>{" "}
          <br /> solve complex business problems with a <br className="hidden sm:block" /> personalized
          approach to each task.
        </h1>
      </div>

      {/* Skill Sections */}
      {[1, 2, 3].map((section, idx) => (
        <div
          key={idx}
          className="w-full text-white flex flex-col sm:flex-row justify-center items-center py-20 sm:py-44 border-t-2 border-gray-600 relative"
        >
          <h1 className="absolute top-2 left-2 text-sm sm:text-lg cousine">
            0{section}
          </h1>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-7xl kanit-extrabold">
              {section === 1 && "FRONTEND DEVELOPMENT"}
              {section === 2 && "BACKEND DEVELOPMENT"}
              {section === 3 && "DESIGN AND TOOLS"}
            </h1>
            <p className="text-lg sm:text-2xl text-gray-400 mt-4">
              {section === 1 && "React, Vue, Svelte, GSAP, Webflow"}
              {section === 2 && "Node.js, Express.js, MongoDB, PostgreSQL"}
              {section === 3 && "Figma, Adobe XD, Illustrator, Photoshop"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
