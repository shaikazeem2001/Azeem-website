import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';
import './FunkyHero.css';

const FunkyHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-editorial-section light-hero-theme" id="hero">
      {/* Top Oval Pill Badge */}
      <motion.div 
        className="hero-oval-badge-wrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="hero-oval-pill">( AZEEM SHAIK )</span>
      </motion.div>

      {/* Center Editorial Poster Stage */}
      <div className="hero-poster-stage">
        {/* Top Text Row: "Port" in Solid Black Sans + "folio" in Outlined Cursive Script */}
        <div className="hero-title-row">
          <span className="title-bold-sans">Port</span>
          <span className="title-script-outline">folio</span>
        </div>

        {/* Year Row: "20 26" Wrapped specifically with the Bounding Selector Box */}
        <div className="hero-year-wrapper">
          <motion.div 
            className="text-bounding-box"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 8 Figma/Illustrator Bounding Handles around 20 26 text */}
            <div className="handle handle-tl" />
            <div className="handle handle-tm" />
            <div className="handle handle-tr" />
            <div className="handle handle-ml" />
            <div className="handle handle-mr" />
            <div className="handle handle-bl" />
            <div className="handle handle-bm" />
            <div className="handle handle-br" />

            <div className="hero-year-numbers">
              <span className="year-num">20</span>
              <span className="year-num">26</span>
            </div>

            {/* Separated Positioner Box so Framer Motion doesn't overwrite translate(-50%, -50%) */}
            <div className="memoji-center-positioner">
              <motion.div 
                className="hero-memoji-centerpiece"
                animate={{ 
                  y: [0, -14, 0],
                  rotate: [0, 1.5, -1.5, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4, 
                  ease: "easeInOut" 
                }}
                whileHover={{ scale: 1.25, rotate: 3 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img 
                  src={isHovered ? "/memoji-hover.png" : "/memoji.png"} 
                  alt="Azeem Shaik 3D Memoji Avatar" 
                  className="center-memoji-img" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Subtitles Tags Row matching the reference image */}
      <motion.div 
        className="hero-tags-footer-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <span className="hero-footer-tag">SOFTWARE ENGINEER</span>
        <span className="hero-footer-tag">FULL-STACK &amp; BACKEND</span>
        <span className="hero-footer-tag">MONGODB &amp; EPAM ALUM</span>
        <span className="hero-footer-tag">APPLIED AI &amp; RAG</span>
      </motion.div>

      {/* Action Bar & Mini Bio */}
      <motion.div 
        className="hero-action-bar-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="hero-mini-desc">
          Building high-performance <strong>Node.js, React, MongoDB, Kafka, Cloud Run &amp; Vector Search LLM Systems</strong> with 3+ years of experience.
        </p>

        <div className="hero-btns-group">
          <a href="#projects" className="modern-btn hero-main-cta">
            Explore 3D Arc Projects <ArrowRight size={18} />
          </a>
          <a href="/Azeem_SE.pdf" target="_blank" rel="noopener noreferrer" className="modern-btn modern-btn-outline dark-outline">
            <Download size={18} /> Resume PDF
          </a>
          <div className="hero-social-row">
            <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FunkyHero;
