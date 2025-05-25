import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[90%] py-8 mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left side - Copyright */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-sm font-thin"
        >
          © {currentYear} Arpit. All rights reserved.
        </motion.p>

        {/* Right side - Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <motion.a
            href="https://github.com/A-R-P-I-T-JAIN"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arpit-jain-b7b940257/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="https://x.com/ArpitJain0805"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 