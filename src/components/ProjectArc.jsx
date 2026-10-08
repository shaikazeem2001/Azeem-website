import React from 'react';
import { Github, ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import './ProjectArc.css';

const projectsData = [
  {
    id: 1,
    title: "Belair Business Solutions",
    category: "LIVE CLIENT APPLICATION",
    desc: "Production commercial website built with modern React architecture, high-performance responsive layout, and customized client services showcase.",
    image: "/belair.png",
    link: "https://www.belairbusinesssolutions.com/",
    isLive: true,
    tags: ["React", "CSS3", "Vite", "Responsive UI"]
  },
  {
    id: 2,
    title: "Moving Forward Staffing Co.",
    category: "RECRUITING & STAFFING PLATFORM",
    desc: "Full-scale corporate recruitment platform featuring candidate intake workflows, client discovery booking, and optimized job application UI.",
    image: "/moving-forward.png",
    link: "https://moving-forward-staffing-co.vercel.app/",
    isLive: true,
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"]
  },
  {
    id: 3,
    title: "HEXA-BYTE",
    category: "AI ASSISTANT & CHAT SYSTEM",
    desc: "Interactive assistant and automated workflow engine built for real-time document search, structured tool invocation, and intelligent conversation.",
    image: "/info-chat.gif",
    link: "https://github.com/shaikazeem2001/HEXA-BYTE",
    isLive: false,
    tags: ["Python", "OpenAI API", "Vector Search", "FastAPI"]
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "FULL-STACK RETAIL SYSTEM",
    desc: "Comprehensive online shopping application featuring dynamic product catalog, state management, checkout flows, and database integration.",
    image: "/shopping.gif",
    link: "https://github.com/shaikazeem2001/E-commerce",
    isLive: false,
    tags: ["Node.js", "Express", "MongoDB", "React"]
  }
];

const ProjectArc = () => {
  return (
    <div className="project-grid-2x2-container">
      <div className="projects-2x2-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-grid-card news-paper-card">
            <div className="news-tape-corner" />
            
            <div className="card-image-box">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="image-overlay-badge">
                {project.isLive ? (
                  <span className="live-status-badge">✦ LIVE SITE</span>
                ) : (
                  <span className="repo-status-badge">✦ GITHUB REPO</span>
                )}
              </div>
            </div>

            <div className="card-content-body">
              <span className="project-cat-tag">{project.category}</span>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              
              <div className="project-card-tags">
                {project.tags.map((t, idx) => (
                  <span key={idx} className="classified-tag">✦ {t}</span>
                ))}
              </div>

              <div className="project-card-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-btn primary-news-btn"
                >
                  {project.isLive ? (
                    <>
                      <ExternalLink size={15} /> VISIT LIVE SITE <ArrowUpRight size={14} />
                    </>
                  ) : (
                    <>
                      <Github size={15} /> VIEW REPOSITORY <ArrowUpRight size={14} />
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectArc;

