import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const location = useLocation();

  // Animation reset on route change
  useEffect(() => {
    setAnimationCompleted(false);
    const timer = setTimeout(() => setAnimationCompleted(true), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Function to open LinkedIn profile
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/sathes-waran-v/", "_blank");
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // Logo animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      }
    }
  };

  // Nav container animation variants
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  // Nav items animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <header className="relative text-[#c0c0c0] font-poppins overflow-hidden mt-2">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center p-5 h-16 max-w-[90%] md:max-w-[720px] mx-auto border border-[rgba(68,68,68,0.4)] rounded-full mt-4 bg-[rgba(17,17,17,0.51)] backdrop-blur-[15px] relative"
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="text-[1.5em] font-extralight text-white"
        >
          <Link to="/">#Portfolio</Link>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className={`absolute md:relative top-20 left-0 md:top-0 md:left-auto w-full md:w-auto bg-[rgba(17,17,17,0.9)] md:bg-transparent backdrop-blur-[15px] md:backdrop-blur-none border md:border-none border-[rgba(68,68,68,0.4)] rounded-lg md:rounded-none md:flex items-center justify-center transition-all duration-300 z-[40] ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <motion.ul
            className="flex flex-col md:flex-row list-none text-center font-light items-center gap-6 py-6 md:py-0"
          >
            <AnimatePresence>
              {["Home", "Skills", "Projects", "Blog", "Contact", "Connect"].map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={navItemVariants}
                  className={
                    item === "Connect" 
                      ? "border border-[rgba(94,93,93,0.4)] py-2 px-3.5 mt-2 md:mt-0 md:ml-6 text-xl rounded-full cursor-pointer text-[#c0c0c0] hover:bg-[rgba(68,68,68,0.2)] hover:text-white transition-all duration-300" 
                      : "cursor-pointer text-[1.1em] text-[#c0c0c0] hover:text-white transition-colors duration-300"
                  }
                  onClick={() => {
                    if (location.pathname === "/") {
                      if (item === "Home") scrollToSection("home");
                      else if (item === "Skills") scrollToSection("Skill");
                      else if (item === "Projects") scrollToSection("projects");
                      else if (item === "Contact") scrollToSection("contact");
                      else if (item === "Connect") openLinkedIn();
                    } else if (item === "Connect") {
                      openLinkedIn();
                    }
                  }}
                >
                  {item === "Blog" ? (
                    <Link to="/blog">{item}</Link>
                  ) : item === "Connect" ? (
                    <span className="flex items-center gap-2">
                      {item}
                  
                    </span>
                  ) : (
                    <Link to="/">{item}</Link>
                  )}
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>

        {/* Hamburger Icon with modern animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cursor-pointer md:hidden z-[50] w-7 h-6 flex flex-col justify-between relative hamburger-menu"
          onClick={toggleMenu}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 9 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-white origin-left"
          ></motion.span>
          <motion.span
            initial={{ opacity: 1, x: 0 }}
            animate={{ 
              opacity: menuOpen ? 0 : 1, 
              x: menuOpen ? -10 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="block w-3/4 h-[2px] bg-white self-end"
          ></motion.span>
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -9 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-white origin-left"
          ></motion.span>
        </motion.div>
      </motion.nav>

      {/* Hero Section - Fixed responsive layout issues */}
    </header>
  );
}

export default Header;
