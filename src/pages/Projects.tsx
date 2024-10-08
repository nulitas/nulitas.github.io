import { motion } from "framer-motion";
import { projects } from "../data";
import { SiGithub } from "react-icons/si";

const Projects: React.FC = () => {
  return (
    <section className="my-8 px-8">
      <motion.header
        initial={{ opacity: 0, x: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold mb-8"
      >
        Projects
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="absolute top-4 right-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub />
                </a>
              )}
            </div>
            <h4 className="font-bold">{project.title}</h4>
            <p className="my-2">{project.description}</p>
            <div className="flex flex-wrap space-x-2 my-2">
              {project.statusTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap space-x-2 my-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
