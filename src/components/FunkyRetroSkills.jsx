import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, GraduationCap, Minus, Square, X } from 'lucide-react';
import './FunkyRetroSkills.css';

const RETRO_SKILL_CATEGORIES = {
  "LANGUAGES & CORE": [
    { name: "HTML/CSS", category: "Web Styling", score: 80, level: 8 },
    { name: "JavaScript", category: "Core Web Language", score: 72, level: 7 },
    { name: "TypeScript", category: "Type-Safe JS", score: 55, level: 6 },
    { name: "SQL", category: "Relational Queries", score: 50, level: 5 },
    { name: "Python", category: "AI & Scripting", score: 40, level: 4 },
    { name: "Java", category: "Object-Oriented", score: 35, level: 4 },
    { name: "Bash", category: "CLI & Shell", score: 25, level: 3 }
  ],
  "FRAMEWORKS & APIS": [
    { name: "React", category: "Frontend Engine", score: 75, level: 8 },
    { name: "REST APIs", category: "API Architecture", score: 72, level: 7 },
    { name: "Express.js", category: "Node Framework", score: 70, level: 7 },
    { name: "Node.js", category: "Backend Runtime", score: 68, level: 7 },
    { name: "Authentication/JWT", category: "Security & Auth", score: 68, level: 7 }
  ],
  "DATABASES & TOOLS": [
    { name: "MongoDB/Mongoose", category: "Document Database", score: 68, level: 7 },
    { name: "Git/GitHub", category: "Version Control", score: 65, level: 7 },
    { name: "SQL", category: "Relational DB", score: 50, level: 5 },
    { name: "DSA/problem solving", category: "Algorithms & Logic", score: 45, level: 5 }
  ],
  "ALL SKILLS SCORECARD": [
    { name: "HTML/CSS", category: "Frontend", score: 80, level: 8 },
    { name: "React", category: "Frontend Framework", score: 75, level: 8 },
    { name: "JavaScript", category: "Language", score: 72, level: 7 },
    { name: "REST APIs", category: "Backend", score: 72, level: 7 },
    { name: "Express.js", category: "Backend Framework", score: 70, level: 7 },
    { name: "Node.js", category: "Runtime", score: 68, level: 7 },
    { name: "MongoDB/Mongoose", category: "Database", score: 68, level: 7 },
    { name: "Authentication/JWT", category: "Security", score: 68, level: 7 },
    { name: "Git/GitHub", category: "Tools & DevOps", score: 65, level: 7 },
    { name: "TypeScript", category: "Language", score: 55, level: 6 },
    { name: "SQL", category: "Database Language", score: 50, level: 5 },
    { name: "DSA/problem solving", category: "Core Logic", score: 45, level: 5 },
    { name: "Python", category: "Language", score: 40, level: 4 },
    { name: "Java", category: "Language", score: 35, level: 4 },
    { name: "Bash", category: "DevOps & CLI", score: 25, level: 3 }
  ]
};

const FunkyRetroSkills = () => {
  const [activeTab, setActiveTab] = useState("LANGUAGES & CORE");

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
                  <span className="pixel-code-line">&gt; STACK: JAVASCRIPT • REACT • NODE • MONGO</span>
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
                  <span className="meter-col-status">SCORE &amp; PROFICIENCY METER</span>
                </div>

                <div className="skills-rows-list">
                  {RETRO_SKILL_CATEGORIES[activeTab].map((skill, idx) => (
                    <div key={idx} className="skill-meter-row">
                      <div className="skill-meta-info">
                        <span className="skill-title-name">{skill.name}</span>
                        <div className="skill-right-meta">
                          <span className="skill-score-badge">Score: {skill.score}</span>
                          <span className="skill-cat-label">{skill.category}</span>
                        </div>
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
