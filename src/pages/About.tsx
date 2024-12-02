import React from "react";
import { about } from "../data";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        initial={{ opacity: 0, x: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        About
      </motion.header>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <p className="text-justify flex-1 pr-0 md:pr-4 mb-4 md:mb-0">
          {about.description}
        </p>
        <button
          onClick={() => window.open(about.cv, "_blank")}
          rel="noopener noreferrer"
          className="border-black border-2 bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]  text-sm flex items-center gap-2  px-4 py-2 "
        >
          Resume
        </button>
      </div>
    </motion.section>
  );
};

export default About;
