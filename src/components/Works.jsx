import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import ExpenseSplitter from "../assets/expense_splitter.png"
import DocX from "../assets/docx.png"


const Works = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Expense Splitter",
      description: "A collaborative expense management platform that helps groups split bills and track shared expenses in real-time.",
      tech: "ReactJs, NodeJs, MongoDb, ExpressJs, SocketIo, Gsap",
      image: ExpenseSplitter,
      web: "https://expense-splitter-seven.vercel.app/",
      git: "https://github.com/A-R-P-I-T-JAIN/Expense-Splitter",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      name: "DoodleSense",
      description: "An AI-powered drawing application that transforms your sketches into meaningful insights and creative designs.",
      tech: "React, Node, MongoDb, Express, GenAi, Gsap",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      web: "https://doodle-sense.vercel.app/",
      git: "https://github.com/A-R-P-I-T-JAIN/DoodleSense",
      color: "from-pink-500/20 to-orange-500/20"
    },
    {
      id: 3,
      name: "Docx",
      description: "A modern document management system with real-time collaboration features and seamless sharing capabilities.",
      tech: "NextJs, Gsap",
      image: DocX,
      web: "https://docxx-tawny.vercel.app/",
      git: "https://github.com/A-R-P-I-T-JAIN/docX",
      color: "from-green-500/20 to-teal-500/20"
    },
    // {
    //   id: 4,
    //   name: "TaskFlow",
    //   description: "An intelligent task management system with AI-powered prioritization and automated workflow optimization.",
    //   tech: "React, TypeScript, Firebase, OpenAI API, TailwindCSS",
    //   image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   web: "#",
    //   git: "#",
    //   color: "from-indigo-500/20 to-cyan-500/20"
    // },
    // {
    //   id: 5,
    //   name: "EcoTrack",
    //   description: "A sustainability monitoring platform that helps businesses track and reduce their environmental impact.",
    //   tech: "Next.js, Python, TensorFlow, PostgreSQL, D3.js",
    //   image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   web: "#",
    //   git: "#",
    //   color: "from-emerald-500/20 to-teal-500/20"
    // },
    // {
    //   id: 6,
    //   name: "SoundScape",
    //   description: "An immersive audio experience platform that creates personalized sound environments for productivity and relaxation.",
    //   tech: "React Native, Web Audio API, Node.js, MongoDB, WebGL",
    //   image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    //   web: "#",
    //   git: "#",
    //   color: "from-violet-500/20 to-fuchsia-500/20"
    // }
  ];

  return (
    <div id="works" className="min-h-screen bg-black py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-light text-gray-400 mb-4">Selected Works</h2>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Creative Portfolio
            {/* <span className="mt-2">Portfolio</span> */}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            A showcase of innovative projects that demonstrate technical expertise and creative problem-solving
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
          >
            <div className="min-h-screen px-4 text-center">
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="inline-block w-full max-w-7xl p-6 my-8 text-left align-middle transition-all transform"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-white">All Projects</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects.map((project) => (
                    <WorkCard key={project.id} {...project} />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
