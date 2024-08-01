import React from "react";
import { education } from "../data";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Education</h3>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="flex-grow">
              <h4 className="font-bold">{edu.institution}</h4>
              <p className="text-gray-600">{edu.degree}</p>
            </div>
            <p className="text-gray-500 md:text-right mt-2 md:mt-0 md:ml-4">
              {edu.date}
            </p>
            <p className="text-gray-500 md:text-right mt-2 md:mt-0 md:ml-4">
              GPA: {edu.gpa}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
