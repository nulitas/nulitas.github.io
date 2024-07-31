import React from "react";
import { skills } from "../data";

const SkillItem: React.FC<{ text: string; Icon: React.ComponentType<any> }> = ({
  text,
  Icon,
}) => {
  return (
    <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm flex items-center gap-2">
      <Icon size={20} />
      {text}
    </span>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="my-8 px-8">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} text={skill.text} Icon={skill.Icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
