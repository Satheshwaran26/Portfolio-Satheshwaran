import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactLogo from "../assets/react.png";
import diconLogo from "../assets/css.png";
import Htmllogo from "../assets/html (1).png";
import Javascriptlogo from "../assets/javascript (1).png";
import Tailwindlogo from "../assets/tailwind.png";
import Node from "../assets/nodejs.png";
import python from "../assets/python (1).png";
import firbase from "../assets/firebase.png";
import mysql from "../assets/mysql.png";
import email from "../assets/emailjs.png";
import mongo from "../assets/mongo-db.png";
import vscode from "../assets/vs.png";
import gitlogo from "../assets/git.png";
import bvk from "../assets/ex.png";
import github from "../assets/github.png";
import netlifylogo from "../assets/netlify.png";
import Vercel from "../assets/vercel.png";
import canva from "../assets/canva.png";
import nextjs from "../assets/next.png";
const SkillSection = ({ title, skills }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="mb-10 font-poppins"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <h2 className="text-xl sm:text-2xl text-[#535353] font-light mb-5 uppercase">{title}</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center bg-[#4140401b] border border-[#232323] rounded-lg p-4 hover:translate-y-[-5px] hover:shadow-lg transition-transform duration-200 h-[58px] w-full backdrop-blur-[15px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={skill.image}
              alt={`${skill.name} logo`}
              className="w-12 h-12 p-1 flex-shrink-0"
            />
            <span className="text-sm sm:text-lg font-[400] text-[#c0c0c0] pl-4 truncate max-w-full">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skill = () => {
  const backendSkills = [
    { name: "HTML5", image: Htmllogo },
    { name: "CSS3", image: diconLogo },
    { name: "JavaScript", image: Javascriptlogo },
    { name: "Next ", image: nextjs },
    { name: "React JS", image: reactLogo },
    { name: "Tailwind CSS", image: Tailwindlogo },

  ];

  const frontendSkills = [
    { name: "Node JS", image: Node },
    { name: "Express JS", image: bvk },
    { name: "Python", image: python },
    { name: "Firebase", image: firbase },
    { name: "MySQL", image: mysql },
    { name: "Email JS", image: email },
    { name: "MongoDB", image: mongo },
  ];

  const tools = [
    { name: "VS Code", image: vscode },
    { name: "Git", image: gitlogo },
    { name: "GitHub", image: github },
    { name: "Netlify", image: netlifylogo },
    { name: "Vercel", image: Vercel },
    { name: "Canva", image: canva },
  ];

  return (
    <div id="Skill" className="max-w-screen-xl mx-auto px-5 py-10">
      <motion.h1
        className="text-left mb-10 text-3xl text-[#C0c0c0] font-light"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        TECHNOLOGIEËN
      </motion.h1>
      <SkillSection title="Front-end" skills={backendSkills} />
      <SkillSection title="Back-end" skills={frontendSkills} />
      <SkillSection title="Tools" skills={tools} />
    </div>
  );
};

export default Skill;
