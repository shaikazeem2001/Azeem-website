import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, ExternalLink, Code2 } from 'lucide-react';
import './Project.css';

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Weather App",
      description: "A simple yet effective weather app with real-time data and beautiful UI",
      image: "/3dweather.gif",
      link: "",
      tech: ["React", "API", "CSS"]
    },
    {
      title: "Burger Builder",
      description: "Customize and order your favorite burger with an interactive builder",
      image: "/burger.gif",
      link: "",
      tech: ["React", "Firebase", "Redux"]
    },
    {
      title: "Nike UI",
      description: "A Nike-inspired e-commerce design with modern aesthetics",
      image: "/nike.gif",
      link: "",
      tech: ["React", "Tailwind", "Framer"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <div className="projects-section">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="icon-box">
          <Briefcase size={32} color="#000" />
        </div>
        <h2 className="projects-title">Featured Projects</h2>
      </motion.div>

      <motion.div 
        className="projects-grid"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              scale: 1.03,
              borderColor: "rgba(1, 254, 152, 0.6)",
              boxShadow: "0 25px 50px rgba(1, 254, 152, 0.2)"
            }}
            style={{ perspective: 1000 }}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ExternalLink size={40} color="#01FE98" strokeWidth={2.5} />
                </motion.div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-header">
                <Code2 size={20} color="#01FE98" />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="tech-tag"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(1, 254, 152, 0.15)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.a 
                href={project.link} 
                className="project-link"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
