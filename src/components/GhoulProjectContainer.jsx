import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ExternalLink, Github, X } from 'lucide-react';
import { GhoulSVGs } from './GhoulSVGs';
import './GhoulProjectContainer.css';

const projectsData = [
  {
    id: 1,
    title: "Project Alpha",
    ghoul: "ghoul-1",
    logo: "logo-adamn",
    desc: "A futuristic AI-powered application.",
    tech: ["React", "Node.js", "MongoDB", "GSAP"],
    github: "#",
    demo: "#",
    color: "#40AECC"
  },
  {
    id: 2,
    title: "Project Beta",
    ghoul: "ghoul-2",
    logo: "logo-choke",
    desc: "E-commerce platform with real-time analytics.",
    tech: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
    color: "#DF2564"
  },
  {
    id: 3,
    title: "Project Gamma",
    ghoul: "ghoul-3",
    logo: "logo-evel",
    desc: "Social media dashboard for influencers.",
    tech: ["Vue", "Firebase", "D3.js", "Express"],
    github: "#",
    demo: "#",
    color: "#F5F077"
  },
  {
    id: 4,
    title: "Project Delta",
    ghoul: "ghoul-4",
    logo: "logo-1",
    desc: "Blockchain-based identity verification system.",
    tech: ["React", "Solidity", "Web3.js", "Hardhat"],
    github: "#",
    demo: "#",
    color: "#51B581"
  }
];

const GhoulProjectContainer = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // Initial entrance animation
    const cards = cardsRef.current;

    gsap.set(cards, {
      rotationY: 0,
      rotationX: 0,
      z: -500,
      opacity: 0,
      y: 200
    });

    gsap.to(cards, {
      z: 0,
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.15,
      ease: "power4.out",
    });

    // Hover effect setup
    // cards.forEach((card, i) => {
    //   card.addEventListener('mouseenter', () => {
    //     if (activeProject !== null) return;
    //     gsap.to(card, {
    //       y: -20,
    //       scale: 1.05,
    //       rotationY: -5,
    //       rotationX: 5,
    //       // boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${projectsData[i].color}40`,
    //       duration: 0.4,
    //       ease: "power2.out",
    //       zIndex: 10
    //     });
    //   });

    // card.addEventListener('mouseleave', () => {
    //   if (activeProject !== null) return;
    //   gsap.to(card, {
    //     y: 0,
    //     scale: 1,
    //     rotationY: 0,
    //     rotationX: 0,
    //     // boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    //     duration: 0.4,
    //     ease: "power2.out",
    //     zIndex: 1
    //   });
    // });
  });
}, [activeProject]);

const handleCardClick = (index) => {
  setActiveProject(projectsData[index]);
};

const closeProject = () => {
  setActiveProject(null);
};

return (
  <div className="ghoul-projects-wrapper" ref={containerRef}>
    <GhoulSVGs />

    <div className="ghoul-cards-container">
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className="ghoul-card-wrap"
          ref={el => cardsRef.current[index] = el}
          onClick={() => handleCardClick(index)}
        >
          <div className="ghoul-card-inner" style={{ '--accent': project.color }}>
            <div className="ghoul-card-bg">
              <svg className="ghoul-card-logo"><use href={`#${project.logo}`} /></svg>
              <div className="ghoul-card-stripes"></div>
            </div>
            <svg className="ghoul-avatar"><use href={`#${project.ghoul}`} /></svg>
            <div className="ghoul-card-footer">
              <svg className="ghoul-qr"><use href="#qr-1" /></svg>
              <div className="ghoul-card-title">{project.title}</div>
              <svg className="ghoul-no"><use href="#no-1" /></svg>
            </div>
          </div>
        </div>
      ))}
    </div>

    {activeProject && (
      <div className="ghoul-modal-overlay">
        <div className="ghoul-modal-backdrop" onClick={closeProject}></div>
        <div className="ghoul-modal-content">
          <button className="ghoul-modal-close" onClick={closeProject}>
            <X size={24} />
          </button>
          <div className="ghoul-modal-header" style={{ color: activeProject.color }}>
            <svg className="ghoul-modal-avatar"><use href={`#${activeProject.ghoul}`} /></svg>
            <h2>{activeProject.title}</h2>
          </div>
          <div className="ghoul-modal-body">
            <p className="ghoul-modal-desc">{activeProject.desc}</p>
            <div className="ghoul-modal-tech">
              {activeProject.tech.map((t, i) => (
                <span key={i} className="ghoul-tech-tag" style={{ borderColor: activeProject.color, color: activeProject.color }}>{t}</span>
              ))}
            </div>
            <div className="ghoul-modal-links">
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="ghoul-link-btn" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <Github size={20} /> GitHub
              </a>
              <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="ghoul-link-btn" style={{ background: activeProject.color, color: '#000' }}>
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default GhoulProjectContainer;
