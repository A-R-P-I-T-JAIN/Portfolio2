import React from "react";
import WorkCard from "./WorkCard";
import expense_splitter from "../assets/expense_splitter.mp4";
import docx from "../assets/docx.mp4";
import doodle from "../assets/doodle.mp4";

const Works = ({ onVideoLoad }) => {
  return (
    <div
      id="works"
      className="w-[90%] border-b-2 border-gray-200 pb-32 mx-auto"
    >
      {/* Header Section */}
      <div className="cousine w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-lg font-thin pt-2">
        <p>Works</p>
        <p className="sm:mt-0 mt-2">
          03/<span className="text-gray-400">05</span>
        </p>
      </div>

      {/* Title Section */}
      <div className="text-center pt-20">
        <h1 className="text-white text-[16.5vw] sm:text-[10vw] lg:text-[8vw] kanit-extrabold leading-[11vw] sm:leading-[8vw]">
          SELECTED
        </h1>
        <h1 className="text-white text-[16.5vw] sm:text-[10vw] lg:text-[8vw] kanit-extrabold pt-4 leading-[11vw] sm:leading-[8vw]">
          WORKS
        </h1>
      </div>

      {/* Work Cards Section */}
      <WorkCard
        vid={expense_splitter}
        tech="ReactJs, NodeJs, MongoDb, ExpressJs, SocketIo, Gsap"
        name="Expense Splitter"
        onVideoLoad={onVideoLoad}
        web="https://main--expensplitter.netlify.app/"
        git="https://github.com/A-R-P-I-T-JAIN/Expense-Splitter"
      />
      <WorkCard
        vid={doodle}
        tech="React, Node, MongoDb, Express, GenAi, Gsap"
        name="DoodleSense"
        onVideoLoad={onVideoLoad}
        web="https://doodle-sense.vercel.app/"
        git="https://github.com/A-R-P-I-T-JAIN/DoodleSense"
      />
      <WorkCard
        vid={docx}
        tech="NextJs, Gsap"
        name="Docx"
        onVideoLoad={onVideoLoad}
        web="https://docxx-tawny.vercel.app/"
        git="https://github.com/A-R-P-I-T-JAIN/docX"
      />
    </div>
  );
};

export default Works;
