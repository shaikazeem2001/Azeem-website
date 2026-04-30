import React, { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import './Project.css';
import ProjectArc from './ProjectArc';

const Project = () => {
  const ref = useRef(null);

  return (
    <div className="projects-section" id="projects" ref={ref} style={{ paddingBottom: '4rem', overflow: 'hidden' }}>
      <div className="projects-header" style={{ marginBottom: '20px' }}>
        <div className="icon-box">
          <Briefcase size={24} color="#000" />
        </div>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <ProjectArc />
    </div>
  );
};

export default Project;
