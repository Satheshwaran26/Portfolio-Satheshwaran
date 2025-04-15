import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Always set to true initially so button is visible
  const [showScrollButton, setShowScrollButton] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const buttonRef = useRef(null);
  
  // Modified scroll detection to ensure button shows properly
  useEffect(() => {
    // Force button visibility for testing
    setShowScrollButton(true);
    
    const handleScroll = () => {
      // Lower the threshold and always show button for now
      // We can adjust this once we confirm it's working
      setShowScrollButton(true);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified, more reliable scroll-to-top function
  const handleScrollToTop = () => {
    console.log("Scroll button clicked");
    
    setIsScrolling(true);
    
    // Add visual feedback
    if (buttonRef.current) {
      buttonRef.current.classList.add('pulse-on-click');
    }
    
    // Simple approach - direct scroll without custom animation
    window.scrollTo(0, 0);
    
    // Also try native smooth scroll as fallback
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error("Smooth scroll failed:", error);
    }
    
    // Ensure document is at top using another method
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Reset animation states
    setTimeout(() => {
      setIsScrolling(false);
      if (buttonRef.current) {
        buttonRef.current.classList.remove('pulse-on-click');
      }
    }, 800);
  };
  
  const socialLinks = [
    { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
    { name: "GitHub", icon: "fab fa-github", url: "#" },
    { name: "Instagram", icon: "fab fa-instagram", url: "#" }
  ];

  return (
    <footer className="relative py-12 font-poppins">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4A4A4A] opacity-10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(68,68,68,0.4)] to-transparent mb-10"></div>
        
        <div className="flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-light text-[#c0c0c0] mb-6"
          >
            Satheshwaran V
          </motion.h2>
          
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
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#8a8a8a] text-sm text-center"
          >
            © {currentYear} Satheshwaran. All rights reserved.
          </motion.p>
        </div>
      </div>
      
      {/* Simplified button with basic functionality first */}
      <button
        ref={buttonRef}
        type="button"
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#2a2a2a] text-white shadow-lg flex items-center justify-center hover:bg-[#3a3a3a] transition-all duration-300 z-[9999] cursor-pointer border border-[rgba(100,100,100,0.4)]"
        aria-label="Scroll to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        .pulse-on-click {
          animation: pulse 0.6s;
        }
        
        @keyframes rocket-to-top {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100vh); }
        }
        
        .scroll-animation {
          position: relative;
          overflow: hidden;
        }
        
        .scroll-animation::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
          opacity: 0;
          animation: ripple 0.8s ease-out;
        }
        
        @keyframes ripple {
          0% { transform: scale(0.5); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        
        .active-scroll-btn {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        
        @keyframes shoot-to-top {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-20px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes spin-once {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
