import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectArc.css';

const projectsData = [
  {
    id: 1,
    title: "Belair Business Solutions",
    image: "/belair.png",
    link: "https://www.belairbusinesssolutions.com/",
    isLive: true
  },
  {
    id: 2,
    title: "Moving Forward Staffing Co.",
    image: "/moving-forward.png",
    link: "https://moving-forward-staffing-co.vercel.app/",
    isLive: true
  },
  {
    id: 3,
    title: "HEXA-BYTE",
    image: "/info-chat.gif",
    link: "https://github.com/shaikazeem2001/HEXA-BYTE",
    isLive: false
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    image: "/shopping.gif",
    link: "https://github.com/shaikazeem2001/E-commerce",
    isLive: false
  },
  {
    id: 5,
    title: "Burger Restaurant",
    image: "/burger.gif",
    link: "https://github.com/shaikazeem2001/burger",
    isLive: false
  },
  {
    id: 6,
    title: "Supply Chain Dashboard",
    image: "/supply-chain.png",
    link: "https://github.com/shaikazeem2001/supply-chain-dashboard",
    isLive: false
  }
];

const ProjectArc = () => {
  return (
    <div className="project-arc-container">
      <div className="arc-wrapper" style={{ '--cards': projectsData.length }}>
        {projectsData.map((project, idx) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="arc-card"
            style={{ '--card-i': idx + 1, zIndex: 10 + idx }}
          >
            <img src={project.image} alt={project.title} />
            <div className="arc-card-content">
              <h3>{project.title}</h3>
              <p>
                {project.isLive ? (
                  <>
                    <ExternalLink size={16} /> Visit Live Site
                  </>
                ) : (
                  <>
                    <Github size={16} /> View on GitHub
                  </>
                )}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectArc;
