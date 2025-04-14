import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/sathes-profile.jpg";


function Hero() {
    return (
      <div className="relative overflow-hidden mt-10 font-poppins">
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4A4A4A] opacity-50 blur-[150px] rounded-full pointer-events-none"></div>
        <div id="home" className="hero-section relative pt-[40px] md:pt-[60px] xl:pt-[80px] pb-[70px] flex flex-col lg:flex-row items-center justify-between  max-w-[90%] md:max-w-[1650px] mx-auto  md:mt-20 px-4 md:px-5 text-center lg:text-left">
        
         
        {/* Text Section - Now appears first on mobile and desktop */}
        <motion.div
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Role Badge */}
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block py-2 px-4 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full text-[0.9em] sm:text-[1em] md:text-[1.2em] mb-4 font-[200]"
          >
            <span className="flex items-center">
            ⭐
              Code Developer
            </span>
          </motion.span>

          {/* Headings */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[1.4em] sm:text-[1.6em] md:text-[2.2em] text-[#c0c0c0] font-[200]"
          >
            Hi, I am <span className="text-white">Satheshwaran V</span> 👋
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[1.2em] sm:text-[1.5em] md:text-[2.2em] font-extralight mb-[10px] mt-[8px] max-w-full text-[#AEAEAE] font-poppins"
          >
            I am Passionate in Web Development and Programmer 
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-1 mb-8 font-extralight text-[0.9em] sm:text-[1em] md:text-[1.1em] text-[#C0C0C0] max-w-[600px]"
          >
            Crafting beautiful, user-centered experiences that shine with
            creativity and innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 sm:space-x-4 h-auto text-[0.9em] sm:text-[1em] md:text-[1.2em] font-[200] w-full sm:w-auto"
          >
            <a
              href="path-to-cv.pdf"
              className="py-3 px-6 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full text-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300 w-full sm:w-auto"
              download="YourCVName.pdf"
            >
              Download CV
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sathes-waran-v/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full flex items-center justify-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a
                href="https://instagram.com/_ryzxn_26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full flex items-center justify-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://github.com/Satheshwaran26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[rgba(68,68,68,0.4)] bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] text-gray-300 rounded-full flex items-center justify-center hover:border-[rgba(120,120,120,0.4)] hover:text-white transition-all duration-300"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Profile Image - Now appears second on mobile and desktop */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end w-full lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[rgba(94,93,93,0.12)] rounded-full blur-md"></div>
            <img
              src={profileImage}
              alt="Profile Picture of the Developer"
              className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] p-2 bg-[rgba(94,93,93,0.12)] border-2 border-dotted border-[rgba(94,93,93,0.4)] rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
    );
}

export default Hero;