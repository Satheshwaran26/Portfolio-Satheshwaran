import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [

    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
    { name: "GitHub", icon: "fab fa-github", url: "#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#" }
  ];

  return (
    <footer className="relative py-12 font-poppins">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4A4A4A] opacity-10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4">
        {/* Simple divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(68,68,68,0.4)] to-transparent mb-10"></div>
        
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-light text-[#c0c0c0] mb-6"
          >
            Satheshwaran
          </motion.h2>
          
          {/* Navigation */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8 text-[#8a8a8a] mb-8"
          >
            <li className="hover:text-white transition-colors"><a href="#home">Home</a></li>
            <li className="hover:text-white transition-colors"><a href="#skills">Skills</a></li>
            <li className="hover:text-white transition-colors"><a href="#projects">Projects</a></li>
            <li className="hover:text-white transition-colors"><a href="#blog">Blog</a></li>
            <li className="hover:text-white transition-colors"><a href="#contact">Contact</a></li>
          </motion.ul>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[rgba(17,17,17,0.3)] backdrop-blur-[15px] border border-[rgba(68,68,68,0.4)] text-gray-400 hover:text-white hover:bg-[rgba(68,68,68,0.4)] transition-all duration-300"
                aria-label={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#8a8a8a] text-sm text-center"
          >
            © {currentYear} Satheshwaran. All rights reserved.
          </motion.p>
        </div>
        
        {/* Back to top button */}
        <div className="absolute right-6 bottom-6 sm:right-10 sm:bottom-10">
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
