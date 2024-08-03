import React from "react";
import { header } from "../data";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
const Header: React.FC = () => {
  return (
    <motion.header
      className="flex flex-col items-center text-center my-8 space-y-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={header.image}
        alt="Profile"
        className="rounded-full w-24 h-24 object-cover"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="text-3xl font-bold">{header.name}</h1>
        <p className="text-gray-600">
          <span role="img" aria-label="location"></span> {header.location}
        </p>
        <div className="flex justify-center gap-2">
          <a href="https://www.linkedin.com/in/andra-rizki-pratama/">
            <SiLinkedin />
          </a>
          <a href="https://github.com/nulitas">
            <SiGithub />
          </a>
          <a href="https://t.me/nulitas">
            <SiTelegram />
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
