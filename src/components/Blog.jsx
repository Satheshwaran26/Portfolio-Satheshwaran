import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import aiLifeImg from '../assets/ailife.jpg';
import nodejsImg from '../assets/nodejs.webp';
import cloudImg from '../assets/cloud.jpeg';
import alexaImg from '../assets/alexa.jpeg';
import techskillsImg from '../assets/techskills.jpeg';
import web3Img from '../assets/web3.jpg';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample blog posts data with imported images
  const blogPosts = [
    {
      id: 1,
      title: 'How AI Is Changing Daily Life',
      excerpt: 'Learn how AI is integrated into your phone, home, and even shopping habits without you realizing it.',
      category: 'technology',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: aiLifeImg
    },
    {
      id: 2,
      title: 'Building Scalable Backend with Node.js',
      excerpt: 'Discover best practices for creating scalable and maintainable Node.js applications.',
      category: 'backend',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: nodejsImg
    },
    {
      id: 3,
      title: 'What Is Cloud Computing? A Beginner’s Guide to the Technology Behind Everything',
      excerpt: 'Understand what powers Google Drive, Netflix, and your favorite apps — no tech degree needed.',
      category: 'cloud',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: cloudImg
    },
    {
      id: 4,
      title: 'How Smart Devices Work: The Tech Behind Alexa, Siri, and Google Assistant',
      excerpt: 'A simple breakdown of how voice assistants understand you and talk back using smart tech.',
      category: 'iot',
      date: 'February 28, 2024',
      readTime: '7 min read',
      image: alexaImg
    },
    {
      id: 5,
      title: 'Top 5 Tech Skills to Learn Now',
      excerpt: 'Want to grow in tech? These 5 skills are your golden ticket to future-ready jobs.',
      category: 'career',
      date: 'February 20, 2024',
      readTime: '4 min read',
      image: techskillsImg
    },
    {
      id: 6,
      title: 'Web3: The Future of the Internet',
      excerpt: 'The next internet revolution is here. Discover how Web3 is changing everything you know.',
      category: 'web3',
      date: 'February 12, 2024',
      readTime: '6 min read',
      image: web3Img
    }
  ];
  

  const categories = ['all', 'frontend', 'backend', 'devops'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="blog" className="min-h-screen py-20 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a1a1a] opacity-50 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#1a1a1a] opacity-50 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extralight  text-white mb-6"
          >
            Blog & Articles
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-[#5c5c5c] to-[#1a1a1a] mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-extralight"
          >
            Insights, tutorials, and thoughts on web development and technology
          </motion.p>
        </div>

   
        {/* Blog Posts Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }
              }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-xl  border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300">
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#2a2a2a] text-gray-300">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-normal text-white mb-3 group-hover:text-gray-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 font-light line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 group-hover:text-white transition-colors">
                      <span className="text-sm font-normal">Read More</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;