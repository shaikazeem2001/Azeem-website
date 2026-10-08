import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, FileText, CheckCircle2, Bookmark, Cpu } from "lucide-react";
import "./Profile.css";
import RadialSkillWheel from "./RadialSkillWheel";

const SKILLS_CLASSIFIEDS = [
  {
    category: "LANGUAGES FOR HIRE",
    badge: "01 / CORE CODE",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Bash"]
  },
  {
    category: "BACKEND & ARCHITECTURE",
    badge: "02 / TELEGRAPHS",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs", "OpenAPI", "Microservices", "Event-Driven Architecture", "Kafka", "OAuth 2.0", "OpenID Connect (OIDC)", "RBAC"]
  },
  {
    category: "FRONTEND TYPESETTING",
    badge: "03 / UI DESK",
    skills: ["React", "Next.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    category: "DATABASES & VAULTS",
    badge: "04 / DATA STORE",
    skills: ["MongoDB", "MongoDB Atlas", "Atlas Vector Search", "PostgreSQL", "Redis", "Mongoose", "Data Modeling", "Database Indexing", "Query Optimization"]
  },
  {
    category: "CLOUD & DEVOPS DISPATCH",
    badge: "05 / INFRASTRUCTURE",
    skills: ["AWS (S3, EC2, Lambda, EKS)", "GCP (Cloud Run, Cloud Storage, Pub/Sub)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"]
  },
  {
    category: "TESTING & APPLIED AI BULLETIN",
    badge: "06 / EVALUATION",
    skills: ["JUnit", "Mockito", "Jest", "pytest", "Playwright", "OpenAI API", "Embeddings", "Retrieval-Augmented Generation (RAG)", "Tool Calling", "Structured Outputs", "LLM Evaluation"]
  }
];

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="profile-broadsheet-section" id="about" ref={ref}>
      {/* Section Divider Rule */}
      <div className="news-section-rule">
        <span className="news-section-rule-title">SECTION II — EDITORIAL DOSSIER &amp; CLASSIFIEDS</span>
      </div>

      <div className="section-container">
        {/* Editorial Profile & Detective Pinboard */}
        <motion.div
          className="editorial-dossier-card news-paper-card"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="news-tape-corner" />
          
          <div className="dossier-grid">
            {/* Left Column: Journalist Profile Writeup */}
            <div className="dossier-left">
              <div className="dossier-header-bar">
                <span className="stamp-classified">DOSSIER #2026-AZ</span>
                <span className="dossier-tag">SPECIAL INVESTIGATIVE PROFILE</span>
              </div>

              <h2 className="dossier-main-title">
                BACKGROUND &amp; PROFESSIONAL RECORD OF AZEEM SHAIK
              </h2>

              <div className="bio-text drop-cap">
                <p>
                  Azeem Shaik is a <strong>Master’s in Computer &amp; Information Science</strong> candidate at the <strong>University of Alabama at Birmingham</strong> (expected graduation May 2026) and a Software Engineer with over 3 years of hands-on industry experience across MongoDB Inc. and EPAM Systems.
                </p>
                <p>
                  His technical record spans scalable REST API architecture, database performance tuning, event-driven Kafka stream processing, and containerized cloud deployment on AWS EKS and GCP Cloud Run. Recently, Azeem has expanded into <strong>Applied AI engineering</strong>, integrating OpenAI LLM features into production engineering consoles and building access-controlled retrieval systems backed by vector search.
                </p>
                <p>
                  Currently residing in <strong>Birmingham, AL</strong>, Azeem is actively seeking software engineering opportunities and is <strong>fully open for relocation</strong> across North America.
                </p>
              </div>

              <div className="dossier-footer-note">
                <Bookmark size={16} /> <span>Official Academic &amp; Industry Record Verified for Relocation</span>
              </div>
            </div>

            {/* Right Column: Detective Pinboard / Photo Clip (Image 2 style) */}
            <div className="dossier-right-pinboard">
              <div className="pinboard-frame news-border-box">
                <div className="pinboard-pushpin" />
                <span className="stamp-classified pinboard-stamp">CONFIDENTIAL</span>

                <div className="pinboard-photo">
                  <img src="/azeem-photo.jpg" alt="Azeem Shaik" />
                  <div className="photo-label">FIG 2. DOSSIER EVIDENCE</div>
                </div>

                <div className="pinboard-notes">
                  <div className="pin-note-item">
                    <CheckCircle2 size={14} className="note-icon" />
                    <span><strong>MS in Computer Science:</strong> UAB (May 2026)</span>
                  </div>
                  <div className="pin-note-item">
                    <CheckCircle2 size={14} className="note-icon" />
                    <span><strong>Relocation Status:</strong> Open Nationwide</span>
                  </div>
                  <div className="pin-note-item">
                    <CheckCircle2 size={14} className="note-icon" />
                    <span><strong>Core Focus:</strong> Backend, Full-Stack &amp; AI</span>
                  </div>
                  <div className="pin-note-item">
                    <CheckCircle2 size={14} className="note-icon" />
                    <span><strong>Industry Record:</strong> MongoDB &amp; EPAM Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills - Newspaper Classifieds Section */}
        <motion.div
          className="classifieds-section"
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="classifieds-header-banner">
            <h2 className="classifieds-main-title">THE DAILY CLASSIFIED DIRECTORY</h2>
            <div className="classifieds-sub">ENGINEERING SKILLS, TOOLKITS &amp; CAPABILITIES FOR HIRE</div>
          </div>

          {/* Classified Columns Grid */}
          <div className="classifieds-grid">
            {SKILLS_CLASSIFIEDS.map((cat, idx) => (
              <div key={idx} className="classified-ad-box news-border-box">
                <div className="ad-box-header">
                  <span className="ad-badge">{cat.badge}</span>
                  <h3 className="ad-category-title">{cat.category}</h3>
                </div>
                <div className="ad-skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="classified-tag">
                      ✦ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Skill Chart Integration */}
          <div className="radial-wheel-newspaper-wrap">
            <div className="wheel-banner-title">
              <span>EXPLORE INTERACTIVE SKILL PROFICIENCY CHART</span>
            </div>
            <RadialSkillWheel />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

