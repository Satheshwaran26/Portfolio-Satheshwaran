import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";


import './App.css';
import Skill from "./components/Skill";
import Projects from "./components/Projectsection";
// Removed duplicate BackToTop import
import ContactSection from "./components/ConatactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import BlogShowcase from "./components/BlogShowcase";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="min-h-screen"> {/* Add main wrapper with min-height */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero/>
                <TextScrolling />
                <Skill />
                <Projects />
                <BlogShowcase />
                <ContactSection />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* Add a catch-all route to handle any undefined routes */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <h1 className="text-4xl font-light text-white mb-4">Page Not Found</h1>
                  <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                  <a href="/" className="px-6 py-2 border border-[#2a2a2a] text-gray-400 hover:text-white rounded-lg">
                    Return Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
       
        <Footer/>
      </div>
    </Router>
  );
}

export default App;