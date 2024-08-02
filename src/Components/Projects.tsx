import React, { useState } from "react";
import { projects } from "../data";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const handleFilterClick = (tag: string) => {
    setFilter((prev) => (prev === tag ? null : tag));
  };

  const filteredProjects = filter
    ? projects.filter(
        (project) =>
          project.tags.includes(filter) || project.statusTags.includes(filter)
      )
    : projects;

  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-8">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-2 right-2">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <SiGithub size={24} />
                  </motion.a>
                )}
              </div>
            </div>
            <div className="p-4 max-h-60 overflow-hidden">
              <h4 className="font-bold text-lg mb-1">{project.title}</h4>
              <p className="text-gray-700 mb-4">
                {project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
              </p>
              <div className="flex flex-wrap space-x-2 mb-2">
                {project.statusTags.map((tag, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs ${
                      filter === tag ? "bg-blue-700 text-white" : ""
                    }`}
                    onClick={() => handleFilterClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap space-x-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs ${
                      filter === tag ? "bg-gray-700 text-white" : ""
                    }`}
                    onClick={() => handleFilterClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
