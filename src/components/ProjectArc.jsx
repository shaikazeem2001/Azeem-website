import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectArc.css';

const projectsData = [
  {
    id: 1,
    title: "HEXA-BYTE",
    image: "/info-chat.gif",
    link: "https://github.com/shaikazeem2001/HEXA-BYTE"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    image: "/shopping.gif",
    link: "https://github.com/shaikazeem2001/E-commerce"
  },
  {
    id: 3,
    title: "Burger Restaurant",
    image: "/burger.gif",
    link: "https://github.com/shaikazeem2001/burger"
  }
];

const ProjectArc = () => {
  return (
    <div className="project-arc-container">
      <div className="arc-wrapper">
        {projectsData.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="arc-card">
            <img src={project.image} alt={project.title} />
            <div className="arc-card-content">
              <h3>{project.title}</h3>
              <p>
                <Github size={16} /> View on GitHub
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectArc;
