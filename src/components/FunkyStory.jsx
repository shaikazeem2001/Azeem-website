import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Briefcase, GraduationCap, CheckCircle2, Bookmark, Terminal, Zap } from 'lucide-react';
import './FunkyStory.css';

const WORK_DISPATCHES = [
  {
    company: "MongoDB Inc.",
    role: "Software Engineer",
    location: "US",
    period: "June 2025 - Present",
    badge: "CURRENT ROLE",
    points: [
      "Optimized 10+ MongoDB queries and Node.js/Express API workflows, reducing redundant database calls by 30% and improving API response times by 20%.",
      "Designed compound indexes and analyzed execution plans, cutting average slow query latency in high-traffic console components from 180ms to 110ms.",
      "Integrated OpenAI API features into internal engineering tools using function calling to suggest query optimizations based on slow query logs."
    ]
  },
  {
    company: "EPAM Systems",
    role: "Software Engineer",
    location: "India",
    period: "June 2022 - August 2024",
    badge: "ENTERPRISE BACKEND",
    points: [
      "Developed Java and Spring Boot microservices for high-throughput enterprise platforms, standardizing REST endpoints with OpenAPI specifications and cutting client integration errors by 15%.",
      "Implemented asynchronous event streaming with Kafka for background record synchronization across multiple backend databases.",
      "Secured API services using OAuth 2.0 / OpenID Connect with fine-grained role-based access control (RBAC).",
      "Containerized services with Docker and deployed to AWS EKS using Terraform scripts and GitHub Actions CI/CD pipelines.",
      "Automated unit and integration testing with JUnit and Mockito, reducing regression test execution time from 28 to 17 minutes."
    ]
  }
];

const FunkyStory = () => {
  return (
    <div className="funky-story-section" id="story">
      {/* Section Header */}
      <div className="story-section-header">
        <span className="brutal-badge yellow-badge">SPECIAL DOSSIER</span>
        <h2 className="story-main-title">AZEEM'S CAREER STORY &amp; INDUSTRY RECORD</h2>
        <p className="story-subtitle">PROVEN ENGINEERING EXPERIENCE AT MONGODB &amp; EPAM SYSTEMS</p>
      </div>

      {/* Main Grid: Story Writeup + Work Dispatches */}
      <div className="story-content-grid">
        {/* Story Bio Dossier Card */}
        <motion.div 
          className="story-bio-card brutal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bio-card-header">
            <span className="brutal-badge">DOSSIER #2026-AZ</span>
            <span className="bio-tag">INVESTIGATIVE PROFESSIONAL RECORD</span>
          </div>

          <div className="bio-body-text">
            <p className="lead-para">
              Azeem Shaik is a <strong>Software Engineer with 3+ years of experience</strong> developing scalable backend services, React applications, and applied AI systems across <strong>MongoDB Inc.</strong> and <strong>EPAM Systems</strong>.
            </p>
            <p>
              Work spans API development, database performance tuning, asynchronous Kafka event processing, and containerized cloud delivery on GCP and AWS. Applied AI experience includes integrating LLM features into engineering workflows and evaluating document retrieval, cited answers, and identity access controls.
            </p>
            <p>
              Currently pursuing a <strong>Master’s in Computer and Information Science</strong> at the <strong>University of Alabama at Birmingham</strong> (expected May 2026), Azeem is based in Birmingham, AL, and is <strong>fully open for relocation nationwide</strong>.
            </p>
          </div>

          {/* Quick Stat Counter Badges */}
          <div className="bio-stats-row">
            <div className="stat-pill-box">
              <span className="stat-num">3+</span>
              <span className="stat-label">YEARS EXP</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-num">30%</span>
              <span className="stat-label">CUT DB CALLS</span>
            </div>
            <div className="stat-pill-box">
              <span className="stat-num">84%</span>
              <span className="stat-label">AI RECALL@5</span>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Dispatches Column */}
        <div className="work-dispatches-column">
          {WORK_DISPATCHES.map((job, idx) => (
            <motion.div 
              key={idx} 
              className="job-dispatch-card brutal-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="job-header">
                <div className="job-title-group">
                  <h3 className="job-company">{job.company}</h3>
                  <span className="job-role">{job.role}</span>
                </div>
                <div className="job-period-badge">
                  <span className="brutal-badge mini-job-badge">{job.badge}</span>
                  <span className="job-date-text">{job.period}</span>
                </div>
              </div>

              <div className="job-points-list">
                {job.points.map((pt, pIdx) => (
                  <div key={pIdx} className="job-point-item">
                    <CheckCircle2 size={16} className="job-icon" />
                    <p>{pt}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunkyStory;
