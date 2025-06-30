import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const frontendSkills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="     text-indigo-400" />, name: "JavaScript" },
    { icon: <FaReact className="     text-indigo-400" />, name: "React.js" },
    { icon: <SiTailwindcss className="     text-indigo-400" />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  ];

  const popVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const SkillBox = ({ title, skills }) => (
    <motion.div
      className="w-full lg:w-1/2 border-2 border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/10 transition duration-300"
      variants={popVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-center text-indigo-400 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-gray-700 bg-gray-800 hover:border-cyan-500 transition-all duration-300"
            variants={popVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="text-2xl">{skill.icon}</div>
            <p className="text-xs text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6 text-gray-300 bg-[#0d1117]" ref={ref}>
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold     text-indigo-400 mb-3">My Skills</h2>
        <p className=" text-justify text-sm leading-relaxed text-gray-400 md:text-lg">
          I'm a frontend developer skilled in React, Next.js, and Tailwind CSS, currently learning full-stack development with the MERN stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
        <SkillBox title="Frontend" skills={frontendSkills} />
        <SkillBox title="Backend" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
