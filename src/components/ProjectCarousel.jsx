import React from 'react';
import './ProjectCarousel.css';

const ProjectCarousel = ({ projects }) => {
  return (
    <div className="carousel-scroll-container">
      <div className="sticky-container">
        <section className="wrapper" style={{ '--cards': projects.length }}>
          {projects.map((project, i) => (
            <div key={i} data-title={project.title} style={{ '--card-i': i + 1 }}>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </section>
      </div>
      
      <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mouse">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
          <path d="M12 7l0 4" />
          <path d="M8 26l4 4l4 -4">
            <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0 0; 0 4; 0 0" dur="1s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default ProjectCarousel;
