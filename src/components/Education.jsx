import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import './Education.css';

const WORK_EXPERIENCE = [
  {
    company: "MongoDB",
    title: "Software Engineer",
    location: "US",
    period: "June 2025 – Present",
    badge: "LATEST DISPATCH",
    highlights: [
      "Optimized 10+ MongoDB queries and Node.js/Express API workflows, reducing redundant database calls by 30% and improving API response times by 20%.",
      "Cut management-console query time from 180 ms to 110 ms after reviewing MongoDB execution plans; revised compound indexes and aggregation stage order to reduce document scans.",
      "Added idempotency checks and bounded retries to Kafka consumers processing background updates; replayed 10,000 synthetic events with injected failures to verify concurrent processing and recovery after lost acknowledgments.",
      "Delivered three management-console workflows using React, TypeScript, and TanStack Query, working with design to define loading states and failure behavior before release.",
      "Standardized deployment of three services on AWS EKS using Kubernetes and Terraform; added release checks covering 22 JUnit backend regression cases and verified rollback behavior in staging.",
      "Integrated an OpenAI-based incident-summary feature into an engineering console, reducing median summary preparation time from 12 to 5 minutes across 40 paired trials; preserved source references and required engineer approval before saving."
    ]
  },
  {
    company: "EPAM Systems",
    title: "Software Engineer",
    location: "IN",
    period: "September 2022 – July 2024",
    badge: "ARCHIVED DISPATCH",
    highlights: [
      "Developed 12 Spring Boot REST endpoints for submission, approval, and status tracking, using PostgreSQL and documenting OpenAPI contracts; integrated OIDC sign-in and OAuth 2.0 access-token validation, enforcing RBAC.",
      "Replaced repeated reference-data queries with Redis caching and invalidation on record updates, reducing database calls from five to two per request.",
      "Connected React screens to backend APIs and coordinated form edits and approval state through Redux Toolkit, resolving eight integration defects before the client demonstration.",
      "Shortened Jenkins regression execution from 28 minutes to 17 minutes by reorganizing JUnit and Mockito checks; worked with QA to reproduce intermittent failures and distinguish application defects from pipeline issues."
    ]
  }
];

const EDUCATION_DATA = [
  {
    institution: "University of Alabama at Birmingham",
    degree: "MS, Computer and Information Science",
    period: "Graduating May 2026",
    location: "Birmingham, AL",
    stamp: "CURRENT CANDIDATE"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="experience-broadsheet-section" id="experience" ref={ref}>
      {/* Section Rule Divider */}
      <div className="news-section-rule">
        <span className="news-section-rule-title">SECTION III — PROFESSIONAL EXPERIENCE &amp; ACADEMIC GAZETTE</span>
      </div>

      {/* Professional Experience Desk */}
      <div className="work-experience-block">
        <div className="experience-header-banner">
          <span className="stamp-classified">NATIONAL &amp; GLOBAL TECH DESK</span>
          <h2 className="experience-main-title">CHRONICLES OF PROFESSIONAL EXPERIENCE</h2>
        </div>

        <div className="experience-articles-grid">
          {WORK_EXPERIENCE.map((job, idx) => (
            <motion.article 
              key={idx} 
              className="news-article-card news-paper-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="news-tape-corner" />

              <div className="article-meta-bar">
                <span className="article-badge">{job.badge}</span>
                <span className="article-period"><Calendar size={13} /> {job.period}</span>
              </div>

              <h3 className="article-headline">
                {job.company.toUpperCase()}: {job.title.toUpperCase()} ({job.location})
              </h3>

              <div className="article-bullets">
                {job.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="bullet-dispatch">
                    <span className="dispatch-icon">🗞</span>
                    <p className="dispatch-text">{point}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Academic Gazette Education Desk */}
      <div className="academic-gazette-block" id="education">
        <div className="gazette-header-banner">
          <h3 className="gazette-title">THE ACADEMIC GAZETTE</h3>
          <div className="gazette-sub">HIGHER EDUCATION &amp; DEGREE QUALIFICATIONS</div>
        </div>

        <div className="gazette-grid">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="gazette-card news-border-box">
              <div className="gazette-top">
                <span className="stamp-verified">{edu.stamp}</span>
                <GraduationCap size={24} className="edu-icon" />
              </div>
              <h4 className="institution-name">{edu.institution}</h4>
              <div className="degree-title">{edu.degree}</div>
              <div className="gazette-meta">
                <span><Calendar size={14} /> {edu.period}</span>
                <span><MapPin size={14} /> {edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

