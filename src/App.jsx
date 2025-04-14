import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TextScrolling from "./components/TextScrolling";

import './App.css';
import Skill from "./components/Skill";
import Projects from "./components/Projectsection";

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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;