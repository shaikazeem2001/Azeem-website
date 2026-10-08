import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, GraduationCap, Minus, Square, X } from 'lucide-react';
import './FunkyRetroSkills.css';

const RETRO_SKILL_CATEGORIES = {
  "LANGUAGES": [
    { name: "Java (SE/EE)", category: "Core Backend", level: 9 },
    { name: "Python", category: "AI & Scripting", level: 9 },
    { name: "TypeScript", category: "Full-Stack", level: 9 },
    { name: "JavaScript (ES6+)", category: "Web Apps", level: 9 },
    { name: "SQL", category: "Relational Queries", level: 8 },
    { name: "Bash & Shell Scripting", category: "CLI & DevOps", level: 8 }
  ],
  "BACKEND & CLOUD": [
    { name: "Node.js / Express.js", category: "Async APIs", level: 9 },
    { name: "Spring Boot Microservices", category: "Java Framework", level: 9 },
    { name: "Kafka Event Streams", category: "Message Broker", level: 8 },
    { name: "AWS (EKS, EC2, S3)", category: "Cloud Infrastructure", level: 8 },
    { name: "GCP (Cloud Run, Storage)", category: "Container Platform", level: 8 },
    { name: "Terraform IaC & Docker", category: "DevOps & Containers", level: 9 }
  ],
  "DATABASES & VECTOR": [
    { name: "MongoDB & Execution Plans", category: "Document DB Tuning", level: 10 },
    { name: "Atlas Vector Search", category: "Semantic Search", level: 9 },
    { name: "PostgreSQL Data Modeling", category: "Relational DB", level: 8 },
    { name: "Redis In-Memory Cache", category: "Performance Store", level: 8 },
    { name: "Compound Indexing", category: "Query Tuning", level: 9 }
  ],
  "FRONTEND ENGINE": [
    { name: "React Architecture", category: "UI Component System", level: 9 },
    { name: "Next.js SSR & Editor", category: "Full-Stack React", level: 9 },
    { name: "Tailwind CSS & Styling", category: "Responsive Layouts", level: 9 },
    { name: "Redux & TanStack Query", category: "State & Data Fetching", level: 8 }
  ],
  "APPLIED AI & TESTING": [
    { name: "OpenAI API & Tool Calling", category: "LLM Orchestration", level: 9 },
    { name: "Vector Retrieval RAG", category: "Context Pipeline", level: 9 },
    { name: "Structured Outputs", category: "Schema Enforcement", level: 9 },
    { name: "JUnit, Mockito, Pytest", category: "Automated Delivery", level: 9 }
  ]
};

const FunkyRetroSkills = () => {
  const [activeTab, setActiveTab] = useState("LANGUAGES");

  return (
    <div className="funky-retro-section" id="skills">
      {/* Section Title */}
      <div className="retro-section-header">
        {/* Floating 3D Character Art on the Left above TECHNICAL */}
        <div className="os-character-stage-left">
          <motion.div 
            className="os-character-floating-wrap-left"
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, -2, 2, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4.8, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src="/tech-character-left.png" 
              alt="Developer Art" 
              className="os-left-character-img" 
            />
          </motion.div>
        </div>

        <span className="brutal-badge neon-badge">RETRO OS DESKTOP</span>
        <h2 className="retro-main-title">TECHNICAL SKILLS &amp; ACADEMIC GAZETTE</h2>
        <p className="retro-sub">INTERACTIVE SYSTEM MONITOR &amp; EDUCATION RECORD</p>
      </div>

      {/* Stage Wrapper for Card + Background 3D Character */}
      <div className="skills-stage-container">
        {/* Enlarge Floating 3D Character Stage Positioned BEHIND/TO THE RIGHT of Card (z-index: 5) */}
        <div className="os-character-stage-right">
          <div className="os-neon-glow-aura" />
          <div className="os-particle op-1" />
          <div className="os-particle op-2" />
          <div className="os-particle op-3" />

          <motion.div 
            className="os-character-floating-wrap"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4.5, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src="/rage-character.png" 
              alt="3D Cyberpunk Developer Art" 
              className="os-rage-character-img" 
            />
          </motion.div>
        </div>

        {/* Main Vintage CRT Computer Frame (z-index: 10 so OS dashboard sits ON TOP of image without overlap) */}
        <div className="crt-window-frame brutal-card">
          {/* Windows OS Title Bar */}
          <div className="crt-title-bar">
            <div className="title-left">
              <Monitor size={16} />
              <span className="crt-title-text">Azeem_OS_v3.0.exe — System Dashboard</span>
            </div>
            <div className="title-controls">
              <button className="win-btn win-min" aria-label="Minimize">
                <Minus size={10} strokeWidth={3} />
              </button>
              <button className="win-btn win-max" aria-label="Maximize">
                <Square size={8} strokeWidth={3} />
              </button>
              <button className="win-btn win-close" aria-label="Close">
                <X size={10} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Inner Desktop Workspace */}
          <div className="crt-workspace-grid">
            {/* Column 1: Academic Gazette / Education */}
            <div className="crt-col col-education">
              <div className="retro-sub-card edu-box">
                <div className="edu-badge-header">
                  <GraduationCap size={22} className="edu-icon" />
                  <span className="brutal-badge yellow-badge">EDUCATION RECORD</span>
                </div>

                <h3 className="edu-degree">MS in Computer &amp; Information Science</h3>
                <div className="edu-school">University of Alabama at Birmingham (UAB)</div>
                <div className="edu-date">August 2024 — May 2026 (Expected)</div>

                <div className="edu-details-list">
                  <div className="edu-point">✦ Focus: Distributed Systems, Cloud Architecture, Database Performance &amp; AI</div>
                  <div className="edu-point">✦ GPA / Status: Good Standing • Open Nationwide for Software Engineering Roles</div>
                </div>
              </div>

              {/* Pixel Art Retro Computer Graphic Box */}
              <div className="pixel-pc-graphic-box">
                <div className="pixel-screen">
                  <span className="pixel-code-line">&gt; AZEEM_ENGINEERING_CORE</span>
                  <span className="pixel-code-line">&gt; STATUS: 100% OPERATIONAL</span>
                  <span className="pixel-code-line">&gt; STACK: JAVA • PYTHON • NODE • MONGODB</span>
                </div>
                <div className="pixel-keyboard-base">
                  <span className="kbd-light green-light"></span>
                  <span className="kbd-text">AZEEM OS HARDWARE</span>
                </div>
              </div>
            </div>

            {/* Column 2: Interactive Retro Skill Meter Dashboard */}
            <div className="crt-col col-skills">
              {/* Category Tabs */}
              <div className="retro-category-tabs">
                {Object.keys(RETRO_SKILL_CATEGORIES).map((cat) => (
                  <button
                    key={cat}
                    className={`retro-tab-btn ${activeTab === cat ? 'active' : ''}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skill Meters Grid */}
              <div className="skills-meter-container">
                <div className="skills-meter-header">
                  <span className="meter-col-title">TECHNOLOGY / FRAMEWORK</span>
                  <span className="meter-col-status">VISUAL PROFICIENCY METER</span>
                </div>

                <div className="skills-rows-list">
                  {RETRO_SKILL_CATEGORIES[activeTab].map((skill, idx) => (
                    <div key={idx} className="skill-meter-row">
                      <div className="skill-meta-info">
                        <span className="skill-title-name">{skill.name}</span>
                        <span className="skill-cat-label">{skill.category}</span>
                      </div>

                      {/* 10-Segment Pixel Meter */}
                      <div className="pixel-meter-bar">
                        {Array.from({ length: 10 }).map((_, sIdx) => (
                          <div 
                            key={sIdx} 
                            className={`meter-segment ${sIdx < skill.level ? 'filled' : ''}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunkyRetroSkills;
