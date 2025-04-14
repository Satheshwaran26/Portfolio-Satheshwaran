import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import linkIcon from '../assets/link-icon.png';
import gym from "../assets/Error-tech.png";
import Dashboard from "../assets/Dashboard.png";
import resume from "../assets/resume.png"
import edu from '../assets/edu.png'
const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projectData = [
    {
      imgSrc: gym,
      category: "Product Design",
      title: "Error Tech Service Website",
      description: "Build a mobile application with a clean and modern user interface.",
      link: "https://erro-tech.vercel.app/",
      githubLink: "https://github.com/Satheshwaran26/tech-Web.git",
    },    
    {
      imgSrc: Dashboard,
      category: "Product Design",
      title: "Website Makeup Design",
      description: "Redesign a website with a fresh and modern look.",
      link: "https://social-dashboard-project.vercel.app/",
      githubLink: "https://github.com/Satheshwaran26/Social-Media-dashboard.git",
    },
    {
      imgSrc: resume,
      category: "Product Design",
      title: "Brand Identity and Motion Design",
      description: "Create a unique brand identity and motion graphics.",
      link: "https://resume-builder-ai-project.vercel.app/",
      githubLink: "https://github.com/Satheshwaran26/Resume-AI.git",
    },
    {
      imgSrc: edu,
      category: "Product Design",
      title: "Mobile Application Development",
      description: "Develop a mobile application with excellent performance.",
      link: "https://educraft-empower.vercel.app/",
      githubLink: "https://github.com/Satheshwaran26/educraft-empower.git",
    },
  ];

  // Left side animation variants
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Right side animation variants
  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Child animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative py-10 md:py-20 font-poppins overflow-hidden" id="projects">
      {/* Background elements */}
      <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-[#4A4A4A] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-40 w-[300px] h-[300px] bg-[#4A4A4A] opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-screen-xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-[#c0c0c0] to-[#4e4e4e] mb-4">
            Explore My Popular Projects
          </h1>
          <p className="text-[#6f6f6f] text-base md:text-xl max-w-2xl mx-auto">
            Check out some of my recent work that showcases my skills and creativity
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-28">
          {projectData.map((project, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? leftVariants : rightVariants}
              className="group"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-8 lg:gap-12`}>
                <motion.div 
                  className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden rounded-2xl border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px]">
                    <motion.img
                      src={project.imgSrc}
                      alt={project.title}
                      className="w-full aspect-[26/16] object-cover transition-transform duration-700 ease-in-out"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-[rgba(17,17,17,0.633)] backdrop-blur-[30px] flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex space-x-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
                      >
                        <img src={linkIcon} alt="View Icon" className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[rgba(255,255,255,0.1)] backdrop-blur-sm hover:bg-[rgba(255,255,255,0.2)] transition-all duration-300"
                      >
                        <i className="fab fa-github text-white text-xl"></i>
                      </a>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="w-full lg:w-1/2 p-4 md:p-6 text-center lg:text-left"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="inline-block py-1 px-3 rounded-full text-[#6f6f6f] text-xs md:text-sm font-medium mb-3 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.2)] backdrop-blur-[15px]"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.div>
                  
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#aaaaaa] mb-3 md:mb-4 leading-tight"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-[1.1em] text-[#6f6f6f] mb-4 md:mb-6 leading-relaxed"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex justify-center lg:justify-start gap-3 sm:space-x-4 mt-4 md:mt-6"
                    variants={itemVariants}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 sm:py-2.5 px-4 sm:px-6 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full text-center hover:bg-[rgba(68,68,68,0.2)] transition-all duration-300 text-sm md:text-base"
                    >
                      View Project
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 sm:py-2.5 px-4 sm:px-6 border border-[rgba(68,68,68,0.4)] text-gray-300 rounded-full flex items-center justify-center hover:bg-[rgba(17,17,17,0.3)] transition-all duration-300 text-sm md:text-base"
                    >
                      <i className="fab fa-github mr-2"></i> Code
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20"
        >
          <a
            href="https://github.com/Satheshwaran26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 text-[#c0c0c0] font-light border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(68,68,68,0.6)] hover:bg-[rgba(68,68,68,0.2)] text-sm md:text-base"
          >
            View More Projects in Github
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
