import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Reset animation on route change
  useEffect(() => {
    setAnimationCompleted(false);
    const timer = setTimeout(() => setAnimationCompleted(true), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/sathes-waran-v/", "_blank");
    setMenuOpen(false);
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <header className="relative text-[#c0c0c0] font-poppins overflow-visible mt-2">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center p-5 h-16 max-w-[90%] md:max-w-[720px] mx-auto border border-[rgba(68,68,68,0.4)] rounded-full mt-4 bg-[rgba(17,17,17,0.51)] backdrop-blur-[15px] relative z-50"
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

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex flex-row list-none text-center font-light items-center gap-6">
            {["Home", "Skills", "Projects", "Blog", "Contact", "Connect"].map(
              (item) => (
                <li
                  key={item}
                  className={
                    item === "Connect"
                      ? "border border-[rgba(94,93,93,0.4)] py-2 px-3.5 mt-0 ml-6 text-xl rounded-full cursor-pointer text-[#c0c0c0] hover:bg-[rgba(68,68,68,0.2)] hover:text-white transition-all duration-300"
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
                    } else if (item === "Home") {
                      setMenuOpen(false);
                    }
                  }}
                >
                  {item === "Blog" ? (
                    <Link to="/blog" onClick={() => setMenuOpen(false)}>{item}</Link>
                  ) : item === "Connect" ? (
                    <span className="flex items-center gap-2">{item}</span>
                  ) : (
                    <Link to="/" onClick={() => setMenuOpen(false)}>{item}</Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <motion.div
            ref={navRef}
            initial={{ opacity: 0, y: -90 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full mt-20 rounded-2xl border-[#c0c0c04b] border bg-[rgba(17,17,17,0.95)] backdrop-blur-[15px] flex flex-col justify-center items-center z-40 h-96"
          >
            <ul className="flex flex-col list-none text-center font-light items-center gap-6 py-6">
              {["Home", "Skills", "Projects", "Blog", "Contact", "Connect"].map(
                (item) => (
                  <li
                    key={item}
                    className={
                      item === "Connect"
                        ? "border border-[rgba(94,93,93,0.4)] py-2 px-3.5 mt-2 text-xl rounded-full cursor-pointer text-[#c0c0c0] hover:bg-[rgba(68,68,68,0.2)] hover:text-white transition-all duration-300"
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
                      } else if (item === "Home") {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {item === "Blog" ? (
                      <Link to="/blog" onClick={() => setMenuOpen(false)}>{item}</Link>
                    ) : item === "Connect" ? (
                      <span className="flex items-center gap-2">{item}</span>
                    ) : (
                      <Link to="/" onClick={() => setMenuOpen(false)}>{item}</Link>
                    )}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}

        {/* Hamburger Icon */}
        <div
          ref={hamburgerRef}
          className="cursor-pointer md:hidden z-50 w-8 h-8 flex flex-col justify-center items-center relative"
          onClick={toggleMenu}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-white origin-center rounded-full shadow-sm"
            style={{ marginBottom: "6px" }}
          ></motion.span>
          <motion.span
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: menuOpen ? 0 : 1,
              x: menuOpen ? -10 : 0,
              width: "75%",
            }}
            transition={{ duration: 0.3 }}
            className="block h-[2px] bg-white rounded-full shadow-sm"
            style={{ marginBottom: "6px", alignSelf: "flex-end" }}
          ></motion.span>
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[2px] bg-white origin-center rounded-full shadow-sm"
          ></motion.span>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;