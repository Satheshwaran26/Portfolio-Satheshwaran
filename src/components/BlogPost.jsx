import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
    id: 1,
      title: 'How AI Is Changing Daily Life 🤖',
      content: `
        Artificial Intelligence (AI) is no longer just a concept from science fiction movies. It's now an integral part of our daily lives, often working behind the scenes to make our experiences smoother and more personalized.

        🔹 Key Areas of AI Impact:
        Smartphones: Battery optimization, route suggestions, spam filtering
        Smart Homes: Automated thermostats, intelligent lighting systems
        Workplace: Meeting scheduling, voice transcription, email assistance
        Business: Data analysis, decision-making support

        💡 AI in Everyday Life:
        From the moment we wake up, AI is there. Our smartphones use AI to optimize battery life, suggest the fastest routes to work, and even filter out spam messages. Smart home devices like thermostats and lights learn our preferences and adjust automatically.

        🚀 Future of AI:
        The future of AI looks even more promising, with advancements in natural language processing and computer vision opening up new possibilities. However, it's important to consider the ethical implications and ensure that AI development remains focused on benefiting humanity.

        🌟 AI for Good:
        AI is also being harnessed to address global challenges:
        Healthcare: Precision medicine and diagnosis
        Environment: Climate change prediction and mitigation
        Education: Personalized learning experiences
        Accessibility: Assistive technologies for people with disabilities

        💭 Final Thoughts:
        AI's role in improving our daily lives is undeniable, and we're just getting started. The possibilities are endless, and the future looks bright for AI-powered innovations.

        Don't forget to check out the tools that can help you get started with AI, including libraries like TensorFlow and PyTorch!
      `,
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Backend with Node.js 🚀',
      content: `
        Node.js has revolutionized backend development with its event-driven, non-blocking I/O model. This article explores best practices for building scalable applications.

        🔑 Key Aspects of Scalable Backend:
        Error Handling: Implement robust error handling and logging
        Database Optimization: Use efficient queries and indexing
        Caching: Implement smart caching strategies
        Load Balancing: Distribute traffic effectively
        Microservices: Break down into smaller, manageable services

        💡 Best Practices:
        1. Error Handling and Logging:
           Use Winston or Bunyan for logging
           Implement proper error boundaries
           Monitor application health

        2. Database Optimization:
           Use proper indexing
           Optimize query performance
           Consider NoSQL for scalability

        3. Caching Strategies:
           Implement Redis for caching
           Use CDN for static assets
           Cache frequently accessed data

        4. Load Balancing:
           Distribute traffic across servers
           Implement health checks
           Use auto-scaling

        5. Microservices Architecture:
           Break down into smaller services
           Use message queues
           Implement service discovery

        🎯 Pro Tips:
        Implement horizontal scaling
        Use containerization (Docker)
        Monitor performance metrics
        Implement CI/CD pipelines

        Stay tuned for our next post where we'll dive deeper into Node.js frameworks like Express.js and Koa.js!
      `,
      category: 'Backend',
      date: 'March 10, 2024',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: "What Is Cloud Computing? A Beginner's Guide ☁️",
      content: `
        Cloud computing has become an essential part of modern technology. But what exactly is it?

        🌟 Cloud Computing Explained:
        In simple terms, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.

        🔹 You're Using Cloud Right Now:
        If you use any of these services, you're using cloud computing:
        Email services (Gmail, Outlook)
        Document editing (Google Docs)
        Streaming services (Netflix, Spotify)
        File storage (Dropbox, Google Drive)

        📊 Cloud Services Breakdown:
        1. Infrastructure as a Service (IaaS):
           Virtual machines
           Storage
           Networking
           Example: AWS, Azure

        2. Platform as a Service (PaaS):
           Development tools
           Database management
           Business analytics
           Example: Google App Engine

        3. Software as a Service (SaaS):
           Email and collaboration
           Customer relationship management
           Enterprise resource planning
           Example: Microsoft 365

        💡 Benefits of Cloud Computing:
        Cost savings
        Scalability
        Flexibility
        Security
        Automatic updates

        Wondering which cloud provider to use? Check out our upcoming comparison between AWS, Google Cloud, and Microsoft Azure!
      `,
      category: 'Cloud',
      date: 'March 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'How Smart Devices Work: The Tech Behind Alexa 🎯',
    content: `
        Smart devices like Alexa have become household staples, but how do they actually work?

        🔍 Core Technologies:
        1. Voice Recognition:
           Converts speech to text
           Handles different accents
           Filters background noise

        2. Natural Language Processing:
           Understands context
           Processes commands
           Generates responses

        3. Cloud Computing:
           Processes requests
           Stores preferences
           Updates skills

        4. Machine Learning:
           Improves accuracy
           Personalizes responses
           Learns from interactions

        🚀 How It Works:
        The process starts when you say the wake word (like "Alexa"). The device records your voice, sends it to the cloud, processes your request, and returns a response - all in seconds.

        💡 Smart Home Integration:
        Lighting control
        Thermostat management
        Security systems
        Entertainment systems
        Shopping lists

        🌟 Future Possibilities:
        Enhanced personalization
        Better context awareness
        More natural conversations
        Advanced home automation

        Curious about the other smart assistants? Stay tuned as we explore Google Assistant and Siri in the upcoming posts!
      `,
      category: 'Iot',
      date: 'February 28, 2024',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Top 5 Tech Skills to Learn Now 🌟',
      content: `
        The tech landscape is constantly evolving, and staying relevant means continuously updating your skillset. Here are the top 5 tech skills that are in high demand right now.

        🔑 Why These Skills Matter:
        The digital transformation has accelerated across all industries, creating a surge in demand for professionals with specific technical expertise. Companies are actively seeking candidates who can help them navigate the increasingly complex tech landscape.

        💡 Top 5 Tech Skills for 2024:
        1. Machine Learning and AI:
           Understanding neural networks
           Proficiency in Python and TensorFlow
           Experience with natural language processing
           Knowledge of computer vision applications

        2. Cloud Computing:
           Multi-cloud architecture expertise
           Serverless application development
           Cloud security best practices
           Infrastructure as Code (IaC) knowledge

        3. Cybersecurity:
           Threat intelligence analysis
           Zero trust network implementation
           Cloud security architecture
           Identity and access management

        4. Data Science:
           Advanced data visualization
           Predictive modeling techniques
           Big data processing frameworks
           SQL and NoSQL database expertise

        5. DevOps and SRE:
           CI/CD pipeline implementation
           Container orchestration with Kubernetes
           Infrastructure automation
           Monitoring and observability skills

        🚀 How to Start Learning:
        There are numerous resources available for learning these skills, from online platforms like Coursera and Udemy to bootcamps and certification programs. Many companies also offer internal training programs to help employees upskill.

        🔹 Industry Insights:
        According to recent industry reports, professionals with these skills can command salaries 20-30% higher than their peers. The demand is particularly strong in finance, healthcare, and e-commerce sectors.

        📊 Future Outlook:
        These skills won't just be valuable in 2024 - they form the foundation of technological advancement for the next decade. Investing in learning these areas now will continue to pay dividends throughout your career.

        Ready to level up your tech career? Start with one skill that aligns with your interests and current role, then expand your knowledge base from there!
      `,
      category: 'Career',
      date: 'February 20, 2024',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Web3: The Future of the Internet 🌐',
      content: `
        Web3 represents the next evolution of the internet, promising more decentralization, transparency, and user control. But what exactly is Web3, and how will it impact our digital lives?

        🔹 Web Evolution:
        Web1 (1990s-2000s): Read-only, static websites
        Web2 (2000s-present): Interactive, social, cloud-based
        Web3 (emerging): Decentralized, trustless, user-owned

        💡 Core Components of Web3:
        1. Blockchain Technology:
           Distributed ledger systems
           Smart contracts
           Tokenization of assets
           Consensus mechanisms

        2. Decentralized Applications (dApps):
           User-owned data
           No central point of failure
           Open-source development
           Community governance

        3. Digital Identity:
           Self-sovereign identity
           Cryptographic verification
           Portable reputation systems
           Privacy-preserving authentication

        4. Tokenomics:
           Digital ownership
           Creator economies
           New business models
           Programmable money

        🚀 Real-World Applications:
        Decentralized finance (DeFi) protocols
        Non-fungible token (NFT) marketplaces
        Decentralized autonomous organizations (DAOs)
        Metaverse platforms and virtual economies
        Supply chain transparency solutions

        🔍 Challenges to Overcome:
        Scalability limitations
        User experience complexity
        Regulatory uncertainty
        Energy consumption concerns
        Technical barriers to entry

        🌟 Why Web3 Matters:
        Web3 isn't just a technical shift—it represents a fundamental change in how we interact with the internet. By reducing reliance on centralized platforms and giving users ownership of their data and digital assets, Web3 aims to create a more equitable digital ecosystem.

        📊 Industry Movement:
        Major tech companies are already positioning themselves for the Web3 transition, with significant investments in blockchain infrastructure, NFT platforms, and metaverse development. Venture capital funding for Web3 startups reached record levels in the past year.

        Whether you're a developer, entrepreneur, or simply an internet user, understanding the principles of Web3 will be crucial as this technology continues to reshape our digital world. Stay curious and start exploring!
      `,
      category: 'Web3',
      date: 'February 12, 2024',
      readTime: '6 min read'
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
    </div>
  );
  }

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1a1a1a] opacity-50 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-[#1a1a1a] opacity-50 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#2a2a2a] text-gray-300">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-400 mt-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
            {post.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph starts with an emoji
              const hasEmoji = /^[🔹💡🚀🌟🔍🎯💭📊🔑]/.test(paragraph.trim());
              
              return (
                <div 
                  key={index} 
                  className={`mb-6 ${hasEmoji ? 'highlight-section' : ''}`}
                >
                  <p className="text-gray-300 leading-relaxed text-lg font-light tracking-wide">
                    {paragraph}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Content Styling */}
          <style jsx>{`
            .prose p {
              line-height: 1.8;
              margin-bottom: 1.5rem;
            }
            .prose p:first-of-type {
              font-size: 1.25rem;
              color: #e5e7eb;
              font-weight: 300;
            }
            .prose p:not(:first-of-type) {
              color: #9ca3af;
            }
            .prose p strong {
              color: #e5e7eb;
              font-weight: 500;
            }
            .prose p em {
              color: #9ca3af;
              font-style: italic;
            }
            .prose ul {
              list-style-type: none;
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .prose li {
              color: #9ca3af;
              margin-bottom: 0.5rem;
              position: relative;
              padding-left: 1.5rem;
            }
            .prose li:before {
              content: "•";
              color: #60a5fa;
              position: absolute;
              left: 0;
              font-size: 1.2rem;
            }
            .prose h2 {
              color: #e5e7eb;
              font-size: 1.5rem;
              font-weight: 500;
              margin-top: 2rem;
              margin-bottom: 1rem;
              position: relative;
              padding-left: 1.5rem;
            }
            .prose h2:before {
              content: "📌";
              position: absolute;
              left: 0;
            }
            .prose h3 {
              color: #e5e7eb;
              font-size: 1.25rem;
              font-weight: 500;
              margin-top: 1.5rem;
              margin-bottom: 1rem;
            }
            .prose a {
              color: #60a5fa;
              text-decoration: underline;
              transition: color 0.3s ease;
            }
            .prose a:hover {
              color: #93c5fd;
            }
            .prose blockquote {
              border-left: 4px solid #374151;
              padding-left: 1rem;
              margin: 1.5rem 0;
              color: #9ca3af;
              font-style: italic;
            }
            .prose code {
              background-color: #1f2937;
              padding: 0.2rem 0.4rem;
              border-radius: 0.25rem;
              font-family: monospace;
              font-size: 0.875rem;
              color: #e5e7eb;
            }
            .highlight-section {
              background: rgba(96, 165, 250, 0.1);
              padding: 1.5rem;
              border-radius: 0.5rem;
              border-left: 4px solid #60a5fa;
            }
            .highlight-section p {
              margin-bottom: 0;
            }
          `}</style>

          <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
            <h2 className="text-2xl font-light text-white mb-6">Share this post</h2>
            <div className="flex space-x-6">
          
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <i className="fab fa-linkedin text-xl group-hover:scale-110 transition-transform"></i>
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i>
                <span>Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
              >
                <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;