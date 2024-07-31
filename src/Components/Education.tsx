import React from "react";
import { education } from "../data";

const Education: React.FC = () => {
  return (
    <section className="my-8 px-8">
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
    </section>
  );
};

export default Education;
