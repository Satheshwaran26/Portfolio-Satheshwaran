import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogShowcase = () => {
  // Sample blog posts data (you can use the same data from Blog.jsx)
  const featuredPosts = [
    {
      id: 1,
      title: 'How AI Is Changing Daily Life 🤖',
      excerpt: 'Learn how AI is integrated into your phone, home, and even shopping habits without you realizing it.',
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80'
    },
    {
      id: 2,
      title: 'Building Scalable Backend with Node.js 🚀',
      excerpt: 'Discover best practices for creating scalable and maintainable Node.js applications.',
      category: 'Backend',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: "What Is Cloud Computing? A Beginner's Guide ☁️",
      excerpt: 'Understand what powers Google Drive, Netflix, and your favorite apps — no tech degree needed.',
      category: 'Cloud',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  return (
    <section id="blog-showcase" className="py-20 relative overflow-hidden">
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
            className="text-4xl md:text-5xl font-extralight text-white mb-6"
          >
            Latest Articles
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
          {featuredPosts.map((post, index) => (
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
                <div className="relative h-full overflow-hidden rounded-xl border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-300">
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
                      <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center px-6 py-3 border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#3a3a3a] rounded-lg transition-all duration-300"
          >
            <span>View All Articles</span>
            <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogShowcase; 