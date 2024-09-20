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
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <p className="text-justify flex-1 pr-0 md:pr-4 mb-4 md:mb-0">
          {about.description}
        </p>
        <a href={about.cv} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 text-black font-semibold underline">
            resume.
          </button>
        </a>
      </div>

      {/* <div className=" mt-10">
        <h2 className="text-2xl font-semibold mb-4">Discord Activity</h2>
        <div className="flex justify-center">
          <img src={about.discord} />
        </div>
      </div> */}
    </motion.section>
  );
};

export default About;
