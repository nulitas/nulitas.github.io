import React from "react";
import { about } from "../data";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <p className="text-justify">{about.description}</p>
    </motion.section>
  );
};

export default About;
