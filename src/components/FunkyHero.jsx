import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';
import './FunkyHero.css';

const FunkyHero = ({ soundEnabled = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const tapAudioRef = useRef(null);
  const winkAudioRef = useRef(null);

  useEffect(() => {
    tapAudioRef.current = new Audio('/tapsound.mp3');
    winkAudioRef.current = new Audio('/winksound.mp3');
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (soundEnabled && tapAudioRef.current) {
      tapAudioRef.current.currentTime = 0;
      tapAudioRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (soundEnabled && winkAudioRef.current) {
      winkAudioRef.current.currentTime = 0;
      winkAudioRef.current.play().catch(() => {});
    }
  };

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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
          <a href="/Azeem_SE.pdf" target="_blank" rel="noopener noreferrer" className="modern-btn dark-outline">
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

      {/* Cream Paint Flow / Asymmetric Dripping Page Break Transition */}
      <div className="hero-paint-drip-wrapper" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 260" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="hero-paint-drip-svg"
          preserveAspectRatio="none"
        >
          {/* Main Organic Asymmetric Dripping Paint Body */}
          <path 
            d="M 0,0 
               L 1440,0 
               L 1440,25 
               C 1420,25 1408,55 1395,95 
               C 1386,115 1370,115 1362,95 
               C 1352,68 1342,30 1320,26 
               C 1300,23 1290,38 1280,52 
               C 1272,62 1260,62 1252,50 
               C 1240,32 1235,25 1215,24 
               C 1195,23 1180,75 1168,145 
               C 1158,172 1135,172 1125,142 
               C 1112,95 1105,32 1080,28 
               C 1062,25 1052,48 1045,72 
               C 1038,85 1025,85 1018,70 
               C 1008,48 1000,28 975,25 
               C 955,23 942,65 932,118 
               C 924,140 905,140 898,118 
               C 888,80 880,30 855,26 
               C 838,23 825,32 805,42 
               C 785,46 765,42 748,32 
               C 738,26 732,24 715,24 
               C 685,24 670,85 652,175 
               C 640,210 610,210 600,172 
               C 585,115 575,32 545,26 
               C 532,23 522,42 515,62 
               C 508,74 498,74 492,60 
               C 485,45 478,28 460,26 
               C 442,24 430,62 420,105 
               C 412,126 395,126 388,105 
               C 378,72 370,30 345,25 
               C 328,22 312,70 300,140 
               C 290,168 270,168 260,138 
               C 248,88 240,32 215,26 
               C 195,23 182,50 172,82 
               C 165,98 148,98 140,80 
               C 130,52 122,28 98,25 
               C 80,23 68,42 55,62 
               C 45,74 30,74 20,58 
               C 10,42 5,24 0,24 
               Z" 
            fill="#FAF9F6" 
          />
          {/* Subtle gloss highlights on primary dripping teardrops */}
          <path
            d="M 632,185 C 627,196 618,200 613,198 C 609,195 608,188 612,178 C 616,168 625,164 630,170 C 633,174 634,179 632,185 Z
               M 1152,150 C 1147,159 1140,163 1136,161 C 1133,159 1132,153 1135,145 C 1138,137 1145,134 1149,139 C 1152,142 1153,146 1152,150 Z
               M 285,148 C 280,157 274,161 270,159 C 267,157 266,151 269,143 C 272,135 278,132 282,137 C 285,140 286,144 285,148 Z
               M 920,124 C 916,132 910,135 907,133 C 904,131 903,126 906,119 C 909,112 915,109 918,113 C 920,116 921,120 920,124 Z"
            fill="rgba(255, 255, 255, 0.55)"
          />
          {/* Detached organic paint droplets beneath the longest drips */}
          <circle cx="625" cy="228" r="6" fill="#FAF9F6" />
          <circle cx="625" cy="248" r="3.5" fill="#FAF9F6" />
          <circle cx="1146" cy="190" r="5" fill="#FAF9F6" />
          <circle cx="280" cy="186" r="4.5" fill="#FAF9F6" />
          <circle cx="915" cy="156" r="4" fill="#FAF9F6" />
          <circle cx="404" cy="142" r="3.5" fill="#FAF9F6" />
          <circle cx="1378" cy="130" r="3.5" fill="#FAF9F6" />
        </svg>
      </div>
    </section>
  );
};

export default FunkyHero;
