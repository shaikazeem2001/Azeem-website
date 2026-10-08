import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ArrowUpRight, Terminal, RotateCw, Monitor, Cpu } from 'lucide-react';
import './FunkyProjectArcade.css';

const ARCADE_PROJECTS = [
  {
    id: 1,
    title: "Belair Business Solutions",
    category: "LIVE CLIENT APPLICATION",
    badge: "FEATURED LIVE",
    desc: "Production commercial website built with modern React architecture, high-performance responsive layout, and customized client services showcase.",
    link: "https://www.belairbusinesssolutions.com/",
    isLive: true,
    tags: ["React", "CSS3", "Vite", "Responsive UI"]
  },
  {
    id: 2,
    title: "Moving Forward Staffing Co.",
    category: "RECRUITING & STAFFING PLATFORM",
    badge: "CORPORATE APP",
    desc: "Full-scale corporate recruitment platform featuring candidate intake workflows, client discovery booking, and optimized job application UI.",
    link: "https://moving-forward-staffing-co.vercel.app/",
    isLive: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"]
  },
  {
    id: 3,
    title: "Versioned Workflow Engine",
    category: "GCP CLOUD RUN & TERRAFORM",
    badge: "CLOUD ARCHITECTURE",
    desc: "Built REST APIs & PostgreSQL data models for conditional workflows & execution histories; developed Next.js editor keeping active runs tied to original configs.",
    link: "https://github.com/shaikazeem2001",
    isLive: false,
    tags: ["TypeScript", "Node.js", "PostgreSQL", "GCP", "Terraform"]
  },
  {
    id: 4,
    title: "Access-Controlled AI RAG",
    category: "APPLIED AI VECTOR SEARCH",
    badge: "APPLIED AI RAG",
    desc: "Built document ingestion & embedding pipelines on MongoDB Atlas Vector Search, exposing document search through OpenAI tool calling with recall@5 accuracy of 84%.",
    link: "https://github.com/shaikazeem2001",
    isLive: false,
    tags: ["Python", "MongoDB Vector", "OpenAI RAG", "Pytest"]
  },
  {
    id: 5,
    title: "Burger Restaurant Platform",
    category: "FULL-STACK E-COMMERCE",
    badge: "RETAIL SYSTEM",
    desc: "Interactive food delivery application featuring custom product customization, asynchronous order queueing, and responsive UI engine.",
    link: "https://github.com/shaikazeem2001/burger",
    isLive: false,
    tags: ["React", "Express", "Node.js", "Tailwind"]
  }
];

const VIEWS = [
  { id: 'front', label: 'FRONT VIEW (0°)', image: '/pc-3d-front.png', rotateY: 0 },
  { id: 'perspective', label: 'PERSPECTIVE (45°)', image: '/pc-3d-perspective.png', rotateY: 25 },
  { id: 'back', label: 'REAR HARDWARE (180°)', image: '/pc-3d-back.png', rotateY: 180 }
];

const FunkyProjectArcade = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [currentViewIdx, setCurrentViewIdx] = useState(0); // 0: front, 1: perspective, 2: back

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % ARCADE_PROJECTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + ARCADE_PROJECTS.length) % ARCADE_PROJECTS.length);
  };

  const handleRotatePC = () => {
    setCurrentViewIdx((prev) => (prev + 1) % VIEWS.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const project = ARCADE_PROJECTS[currentIndex];
  const activeView = VIEWS[currentViewIdx];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25, ease: "easeIn" }
    })
  };

  return (
    <div className="funky-arcade-section" id="projects">
      {/* Section Header - Old PC Terminal Style */}
      <div className="arcade-terminal-header">
        <h2 className="terminal-projects-title">&gt; Projects</h2>
      </div>

      {/* Large 3D Retro PC Desktop Stage */}
      <div className="retro-pc-stage-wrapper">
        {/* Navigation Arrow Left < */}
        <button 
          className="pc-nav-btn pc-nav-left" 
          onClick={handlePrev} 
          title="Previous Project (Left Arrow)"
          aria-label="Previous Project"
        >
          <ChevronLeft size={36} />
        </button>

        {/* 3D Retro Workstation Frame Enclosure */}
        <div className="pc-workstation-frame">
          <motion.img 
            key={activeView.id}
            src={activeView.image} 
            alt="3D Retro Workstation PC Model" 
            className="pc-desk-bg-image"
            initial={{ opacity: 0, rotateY: activeView.rotateY > 90 ? -45 : 45 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* High-Contrast B&W CRT Terminal Display Viewport (Only shown in Front & Perspective views) */}
          {activeView.id !== 'back' && (
            <div className={`pc-screen-viewport viewport-${activeView.id}`}>
              <div className="crt-screen-overlay" />
              <div className="scanline-effect" />

              {/* B&W PC Terminal Header */}
              <div className="pc-terminal-header">
                <div className="term-left">
                  <Terminal size={14} className="term-icon" />
                  <span className="term-file-title">AZEEM_PROJ_FILE_0{project.id}.EXE</span>
                </div>
                <div className="term-right">
                  <span className="term-counter">PROJECT [ 0{project.id} / 0{ARCADE_PROJECTS.length} ]</span>
                </div>
              </div>

              {/* Animated B&W Project Display */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={project.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="pc-bw-screen-content"
                >
                  {/* H1 Project Title */}
                  <h1 className="project-h1-title">{project.title}</h1>

                  {/* H2 About Project Description */}
                  <h2 className="project-h2-about">{project.desc}</h2>

                  {/* Tech Tags Bar */}
                  <div className="pc-tags-container">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="pc-bw-tag-pill">
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  {/* Direct Action Link Buttons */}
                  <div className="pc-bw-actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pc-bw-btn primary-bw-btn"
                    >
                      {project.isLive ? (
                        <>
                          VISIT LIVE SITE <ArrowUpRight size={16} />
                        </>
                      ) : (
                        <>
                          EXAMINE REPOSITORY <Github size={16} />
                        </>
                      )}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Keyboard Nav Prompt */}
              <div className="pc-bottom-prompt">
                <span>PRESS &lt; OR &gt; KEYS TO SCROLL THROUGH PROJECTS</span>
              </div>
            </div>
          )}

          {/* Rear Hardware Specification Overlay (Shown when in Back View) */}
          {activeView.id === 'back' && (
            <motion.div 
              className="pc-hardware-overlay-back"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hw-badge"><Cpu size={14} /> REAR I/O HARDWARE PORT SPECIFICATION</div>
              <div className="hw-spec-item">✦ CRT VGA 15-PIN ANALOG VIDEO INTERFACE</div>
              <div className="hw-spec-item">✦ SERIAL COMM PORT &amp; PARALLEL PRINTER PORT</div>
              <div className="hw-spec-item">✦ 110V/220V DUAL-VOLTAGE POWER TRANSFORMER &amp; EXHAUST FAN</div>
              <div className="hw-spec-item">✦ BITS COMPUTER CORP MODEL XTC-2000 SYSTEM BUS</div>
            </motion.div>
          )}
        </div>

        {/* Navigation Arrow Right > */}
        <button 
          className="pc-nav-btn pc-nav-right" 
          onClick={handleNext} 
          title="Next Project (Right Arrow)"
          aria-label="Next Project"
        >
          <ChevronRight size={36} />
        </button>
      </div>

      {/* Pagination Indicators Bar */}
      <div className="pc-pagination-bar">
        {ARCADE_PROJECTS.map((p, idx) => (
          <button
            key={idx}
            className={`pc-page-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            title={p.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FunkyProjectArcade;


