import React from "react";
import "./Project.css";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Burger Restaurant",
    description:
      "An interactive burger ordering platform that allows users to customize burgers, manage orders, and experience a smooth dashboard-driven UI.",
    image: "./burger.gif",
    link: "https://burger-pi-snowy.vercel.app",
    tech: ["React", "JavaScript", "HTML", "CSS", "Firebase", "Redux"]
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product browsing, cart management, and payment-ready architecture. Built with a modern UI and optimized performance.",
    image: "/shopping.gif",
    link: "https://e-commerce2-rust.vercel.app/",
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Postman"
    ]
  },
  {
    title: "Weather Application",
    description:
      "A real-time weather application that fetches live data from APIs and presents it with a clean, responsive user interface.",
    image: "/3dweather.gif",
    link: "https://weatherapplication24.netlify.app/",
    tech: ["React", "JavaScript", "HTML", "CSS", "Weather API"]
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => window.open(project.link, "_blank")}
          >
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
