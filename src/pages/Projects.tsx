import { motion } from "framer-motion";
import { projects } from "../data";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full max-w-[400px] border-black border-2  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
          >
            <a href={project.githubLink} className="block cursor-pointer">
              <article className="w-full h-full">
                <figure className="w-full aspect-[16/9] border-black border-b-2 overflow-hidden">
                  <img
                    src={project.image}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="px-6 py-5 text-left h-full">
                  <p className="text-base mb-4">{project.date}</p>
                  <h1 className="text-[32px] mb-4">{project.title}</h1>
                  <p className="text-xs mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className=" border-black border-2 bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] text-sm flex items-center px-2 py-1"
                      >
                        <tag.Icon className="mr-1" />
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
