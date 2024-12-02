import React, { useState } from "react";
import { experiences } from "../data";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const [inViewIndexes, setInViewIndexes] = useState<number[]>([]);

  return (
    <motion.section
      className="my-16 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header
        initial={{ opacity: 0, x: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        Experience
      </motion.header>
      <div className="relative border-l border-[#1d1d1d] pl-8 space-y-10">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => {
              if (!inViewIndexes.includes(index)) {
                setInViewIndexes([...inViewIndexes, index]);
              }
            }}
            onViewportLeave={() => {
              setInViewIndexes((prev) => prev.filter((i) => i !== index));
            }}
            animate={
              inViewIndexes.includes(index)
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="absolute -left-4 top-3 w-2 h-2 bg-[#1d1d1d] rounded-full"></div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold text-gray-700">
                {experience.title}
              </h3>
              <span className="text-sm text-gray-700">
                {experience.position}
              </span>
              <span className="text-sm text-gray-500">{experience.date}</span>
              <p className="text-gray-600 text-justify leading-relaxed">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
