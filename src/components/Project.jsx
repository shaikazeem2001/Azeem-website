import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileSearch, FolderGit2, ShieldCheck, Cpu, ExternalLink, Github, Terminal, CheckCircle2 } from 'lucide-react';
import './Project.css';
import ProjectArc from './ProjectArc';

const RESUME_PROJECTS = [
  {
    caseNo: "CASE FILE #01",
    title: "Versioned Workflow Execution Platform",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Next.js", "GCP Cloud Run", "Terraform", "Docker"],
    stamp: "DEPLOYED & VERIFIED",
    points: [
      "Built REST APIs and PostgreSQL data models for conditional workflows, versioned definitions, and execution histories; developed a Next.js editor that kept active runs tied to their original configuration.",
      "Covered 24 editing and execution scenarios with Jest and Playwright; deployed the Docker application to GCP Cloud Run through GitHub Actions, with infrastructure defined in Terraform."
    ],
    github: "https://github.com/shaikazeem2001"
  },
  {
    caseNo: "CASE FILE #02",
    title: "Access-Controlled Document Retrieval Application",
    stack: ["Python", "MongoDB Atlas Vector Search", "OpenAI API", "RAG", "Pytest", "Tool Calling"],
    stamp: "APPLIED AI REPORT",
    points: [
      "Built document ingestion and embedding pipelines on MongoDB Atlas, using vector retrieval to supply context for generated answers; enforced document permissions within the search function using authenticated identity.",
      "Exposed document search through OpenAI tool calling and returned cited answers through validated structured outputs; added explicit handling for questions without sufficient supporting evidence.",
      "Compared keyword and vector retrieval across 100 labeled questions, measuring recall@5 of 72% and 84%, respectively; used pytest to check citation validity, malformed tool arguments, and unauthorized document access."
    ],
    github: "https://github.com/shaikazeem2001"
  }
];

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="projects-broadsheet-section" id="projects" ref={ref}>
      {/* Section Rule Divider */}
      <div className="news-section-rule">
        <span className="news-section-rule-title">SECTION IV — SPECIAL INVESTIGATIVE REPORTS &amp; DISPATCHES</span>
      </div>

      {/* Header Banner */}
      <div className="projects-header-banner">
        <span className="stamp-classified">SPECIAL REPORTS DESK</span>
        <h2 className="projects-main-title">FEATURED ENGINEERING CASE FILES</h2>
        <div className="projects-sub">INVESTIGATIVE BREAKTHROUGHS IN WORKFLOW ENGINES &amp; AI VECTOR SEARCH</div>
      </div>

      {/* Main Resume Projects as Vintage Detective Case Folders (Image 2 style) */}
      <div className="case-files-grid">
        {RESUME_PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="case-file-folder news-paper-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="news-tape-corner" />

            <div className="case-folder-header">
              <div className="case-badge-bar">
                <span className="case-no-tag">{project.caseNo}</span>
                <span className="stamp-verified">{project.stamp}</span>
              </div>
              <h3 className="case-project-title">{project.title}</h3>
            </div>

            <div className="case-tech-stack">
              {project.stack.map((t, tIdx) => (
                <span key={tIdx} className="classified-tag">
                  ✦ {t}
                </span>
              ))}
            </div>

            <div className="case-points-list">
              {project.points.map((pt, pIdx) => (
                <div key={pIdx} className="case-point-item">
                  <CheckCircle2 size={16} className="case-point-icon" />
                  <p>{pt}</p>
                </div>
              ))}
            </div>

            <div className="case-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="news-btn secondary-news-btn">
                <Github size={15} /> EXAMINE REPOSITORY &amp; CODE
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Project Showcase Header */}
      <div className="arc-showcase-header">
        <h3 className="arc-headline">FEATURED PRODUCTION PROJECTS &amp; LIVE SITES</h3>
        <p className="arc-sub">2×2 BROADSHEET PORTFOLIO SHOWCASE</p>
      </div>

      <ProjectArc />
    </div>
  );
};

export default Project;

