import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ArrowRight, ShoppingBag, MessageSquare, TrendingUp, Code2 } from 'lucide-react';
import './FunkyRageShowcase.css';

const SHOWCASE_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce",
    icon: <ShoppingBag size={20} className="proj-icon green-icon" />,
    desc: "Full-stack e-commerce platform with admin panel, JWT auth, Stripe integration and product management.",
    link: "https://github.com/shaikazeem2001/burger",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "HEXA-BYTE",
    icon: <MessageSquare size={20} className="proj-icon blue-icon" />,
    desc: "Real-time community platform for interview discussions with Socket.IO, JWT auth and live chat.",
    link: "https://github.com/shaikazeem2001",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"]
  },
  {
    id: 3,
    title: "Bel Air Business Solutions",
    icon: <TrendingUp size={20} className="proj-icon teal-icon" />,
    desc: "Business lead generation platform with Firebase auth, Google Sheets integration and analytics.",
    link: "https://www.belairbusinesssolutions.com/",
    tags: ["React", "Firebase", "Node.js", "Google Cloud"]
  },
  {
    id: 4,
    title: "Portfolio",
    icon: <Code2 size={20} className="proj-icon lime-icon" />,
    desc: "Personal portfolio with modern UI, animations and Firebase hosting.",
    link: "https://github.com/shaikazeem2001",
    tags: ["React", "Firebase", "Framer Motion"]
  }
];

const FunkyRageShowcase = () => {
  return (
    <section className="rage-showcase-section" id="showcase">
      <div className="rage-showcase-container">
        {/* Main Grid: Projects List on Left + Floating 3D Character on Right */}
        <div className="rage-top-grid">
          {/* Left Column: Featured Projects Card */}
          <div className="rage-projects-card modern-card">
            <div className="rage-card-header">
              <div className="header-left">
                <Folder size={20} className="folder-icon" />
                <h3>Featured Projects</h3>
              </div>
              <a href="#projects" className="view-all-link">
                View All <ArrowRight size={14} />
              </a>
            </div>

            <div className="rage-projects-list">
              {SHOWCASE_PROJECTS.map((proj) => (
                <a 
                  key={proj.id} 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rage-project-row"
                >
                  <div className="proj-row-icon-box">
                    {proj.icon}
                  </div>
                  <div className="proj-row-info">
                    <div className="proj-row-top">
                      <h4>{proj.title}</h4>
                      <ArrowRight size={14} className="row-arrow" />
                    </div>
                    <p>{proj.desc}</p>
                    <div className="proj-row-tags">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Cyberpunk Character Stage */}
          <div className="rage-character-stage">
            {/* Glowing Green Neon Rings & Particle Overlay */}
            <div className="neon-ring ring-1" />
            <div className="neon-ring ring-2" />
            <div className="neon-particle p-1" />
            <div className="neon-particle p-2" />
            <div className="neon-particle p-3" />
            <div className="neon-particle p-4" />

            {/* Floating 3D Cyberpunk Character */}
            <motion.div 
              className="rage-character-floating-wrap"
              animate={{ 
                y: [0, -18, 0],
                rotate: [0, 1.5, -1.5, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4.5, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src="/rage-character.png" 
                alt="3D Cyberpunk Developer" 
                className="rage-character-main-img" 
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Row Grid */}
        <div className="rage-bottom-grid">
          {/* GitHub Contribution Heatmap Card (Full Width) */}
          <div className="rage-heatmap-card modern-card">
            <div className="heatmap-header">
              <span className="heatmap-title">Code Commits &amp; Activity Matrix</span>
            </div>
            <div className="heatmap-grid-matrix">
              {/* 6 Months Matrix Grid */}
              <div className="matrix-cols">
                {Array.from({ length: 48 }).map((_, cIdx) => (
                  <div key={cIdx} className="matrix-col">
                    {Array.from({ length: 6 }).map((_, rIdx) => {
                      const isFilled = (cIdx * 7 + rIdx * 3) % 5 !== 0;
                      const intensity = (cIdx + rIdx) % 3;
                      return (
                        <div 
                          key={rIdx} 
                          className={`matrix-dot ${isFilled ? `active-int-${intensity}` : ''}`} 
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="matrix-months-row">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunkyRageShowcase;
