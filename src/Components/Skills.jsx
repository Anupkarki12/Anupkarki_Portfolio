import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { GiRadarSweep, GiShield } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skills = () => {
  const frontendSkills = [
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  ];

  const backendSkills = [
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  ];

  const toolsSkills = [
    { icon: <FaGithub className="text-white" />, name: "GitHub" },
    { icon: <FaNetworkWired className="text-red-500" />, name: "Nmap" },
    { icon: <GiRadarSweep className="text-blue-400" />, name: "Zenmap" },
    { icon: <GiShield className="text-purple-600" />, name: "Nessus" },
    { icon: <GiShield className="text-green-500" />, name: "OpenVAS" },
    { icon: <GiShield className="text-orange-400" />, name: "Burp Suite" },
  ];

  const popVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const SkillBox = ({ title, skills }) => (
    <motion.div
      className="w-full lg:w-1/3 border-2 border-gray-700 rounded-3xl p-8 shadow-lg bg-gray-900 hover:shadow-cyan-500/50 transition-shadow duration-500"
      variants={popVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-center text-indigo-400 mb-8 tracking-wide">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-700 bg-gray-800 hover:border-cyan-400 hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            variants={popVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.12, duration: 0.5 }}
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="py-24 px-6 text-gray-300 bg-[#0d1117]"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-indigo-400 mb-4 tracking-wide">
          My Skills
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          I'm a frontend developer skilled in React, Next.js, and Tailwind CSS,
          currently learning full-stack development with the MERN stack.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center flex-wrap max-w-6xl mx-auto">
        <SkillBox title="Frontend" skills={frontendSkills} />
        <SkillBox title="Tools" skills={toolsSkills} />
        <SkillBox title="Backend" skills={backendSkills} />
      </div>
    </section>
  );
};

export default Skills;
