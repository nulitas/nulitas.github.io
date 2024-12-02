import React from "react";
import { skills } from "../data";
import { motion } from "framer-motion";

const SkillItem: React.FC<{ text: string; Icon: React.ElementType }> = ({
  text,
  Icon,
}) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      className="border-black border-2 bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]  text-sm flex items-center gap-2  px-4 py-2 "
    >
      <Icon size={20} />
      {text}
    </motion.span>
  );
};

const Skills: React.FC = () => {
  return (
    <motion.section
      className="my-8 px-8"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} text={skill.text} Icon={skill.Icon} />
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
