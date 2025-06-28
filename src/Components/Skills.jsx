import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiNpm,
  SiStripe,
} from "react-icons/si";

import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git & GitHub", icon: <SiGithub className="text-white" /> },
    { name: "NPM", icon: <SiNpm className="text-red-500" /> },
    { name: "Stripe", icon: <SiStripe className="text-indigo-400" /> },
  ];
  return (
    <section
      id="skills"
      className="pt-16 md:pt-18 px-4 sm:px-8 md:px-16 bg-slate-950 text-white max-w-7xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-4">
          My Skills
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Technologies I work with to build modern and scalable web apps.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
