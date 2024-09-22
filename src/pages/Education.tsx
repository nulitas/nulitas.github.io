import React, { useState } from "react";
import { education } from "../data";
import { motion } from "framer-motion";

const Education: React.FC = () => {
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
        Education
      </motion.header>
      <div className="space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
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
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex-grow">
              <h4 className="font-bold text-lg text-gray-700">
                {edu.institution}
              </h4>
              <p className="text-gray-600">{edu.degree}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-500">{edu.date}</p>
              <p className="text-gray-500">GPA: {edu.gpa}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
