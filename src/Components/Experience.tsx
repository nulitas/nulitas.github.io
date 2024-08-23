import React from "react";
import { experiences } from "../data";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            <span className="text-gray-600 mt-1 md:mt-0">
              {experience.date}
            </span>
          </div>
          <div className="text-justify mt-2">
            <p>{experience.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
