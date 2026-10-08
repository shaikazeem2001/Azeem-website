import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RadialSkillWheel.css";

export const SKILL_DASHBOARD_DATA = {
  "All Languages & Tech": [
    { name: "Java", fillRatio: 0.95, category: "Languages" },
    { name: "Node.js / Express.js", fillRatio: 0.92, category: "Backend" },
    { name: "MongoDB & Execution Plans", fillRatio: 0.96, category: "Databases" },
    { name: "React & Next.js", fillRatio: 0.90, category: "Frontend" },
    { name: "Python", fillRatio: 0.88, category: "Languages" },
    { name: "TypeScript & JavaScript", fillRatio: 0.90, category: "Languages" },
    { name: "Spring Boot REST", fillRatio: 0.86, category: "Backend" },
    { name: "PostgreSQL & Redis", fillRatio: 0.88, category: "Databases" },
    { name: "Atlas Vector Search", levelRatio: 0.92, category: "Databases & AI" },
    { name: "Kafka Event Streams", fillRatio: 0.85, category: "Backend" },
    { name: "AWS EKS & Terraform", fillRatio: 0.86, category: "Cloud & DevOps" },
    { name: "OpenAI API & RAG", fillRatio: 0.88, category: "Applied AI" }
  ],
  "Languages": [
    { name: "Java", fillRatio: 0.95, category: "Core Backend" },
    { name: "Python", fillRatio: 0.90, category: "AI & Scripting" },
    { name: "TypeScript", fillRatio: 0.92, category: "Full-Stack" },
    { name: "JavaScript (ES6+)", fillRatio: 0.92, category: "Web Apps" },
    { name: "SQL", fillRatio: 0.88, category: "Relational Queries" },
    { name: "Bash & Shell Scripting", fillRatio: 0.84, category: "DevOps & CLI" }
  ],
  "Backend & Cloud": [
    { name: "Node.js / Express.js", fillRatio: 0.94, category: "Async APIs" },
    { name: "Spring Boot Microservices", fillRatio: 0.88, category: "Java Framework" },
    { name: "Kafka Event-Driven Streams", fillRatio: 0.86, category: "Message Queue" },
    { name: "REST APIs & OpenAPI", fillRatio: 0.94, category: "Contract Specs" },
    { name: "OAuth 2.0 / OIDC & RBAC", fillRatio: 0.88, category: "Authentication" },
    { name: "AWS EKS & EC2", fillRatio: 0.86, category: "Cloud Infra" },
    { name: "GCP Cloud Run & Docker", fillRatio: 0.88, category: "Container Deploy" },
    { name: "Terraform IaC", fillRatio: 0.86, category: "Infrastructure as Code" }
  ],
  "Databases & Search": [
    { name: "MongoDB & Query Optimization", fillRatio: 0.96, category: "Document DB" },
    { name: "MongoDB Execution Plans", fillRatio: 0.94, category: "Index Tuning" },
    { name: "Atlas Vector Search", fillRatio: 0.92, category: "Semantic Search" },
    { name: "PostgreSQL Data Modeling", fillRatio: 0.88, category: "RDBMS" },
    { name: "Redis Cache Invalidation", fillRatio: 0.88, category: "In-Memory Store" },
    { name: "Compound Indexing", fillRatio: 0.92, category: "Performance" }
  ],
  "Frontend Engine": [
    { name: "React Application Architecture", fillRatio: 0.92, category: "UI Engine" },
    { name: "Next.js SSR & Editor", fillRatio: 0.90, category: "Full-Stack React" },
    { name: "Redux Toolkit", fillRatio: 0.88, category: "State Management" },
    { name: "TanStack Query", fillRatio: 0.88, category: "Async Data Fetching" },
    { name: "Tailwind CSS & Responsive UI", fillRatio: 0.86, category: "Styling System" }
  ],
  "Applied AI & Eval": [
    { name: "OpenAI API & Tool Calling", fillRatio: 0.92, category: "LLM Features" },
    { name: "Vector Retrieval RAG", fillRatio: 0.90, category: "Context Pipeline" },
    { name: "Structured Outputs Validation", fillRatio: 0.90, category: "Schema Enforcement" },
    { name: "LLM Benchmark Evaluation", fillRatio: 0.86, category: "Accuracy Testing" }
  ]
};

export default function RadialSkillWheel() {
  const [activeCategory, setActiveCategory] = useState("All Languages & Tech");

  const currentSkills = SKILL_DASHBOARD_DATA[activeCategory] || SKILL_DASHBOARD_DATA["All Languages & Tech"];

  return (
    <div className="skill-dashboard-wrapper">
      {/* Category Tabs */}
      <div className="dashboard-category-tabs">
        {Object.keys(SKILL_DASHBOARD_DATA).map((cat) => (
          <button
            key={cat}
            className={`dashboard-tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Language-Wise Indicator Dashboard Graph (NO NUMBERS) */}
      <div className="dashboard-graph-container news-border-box">
        <div className="dashboard-header-line">
          <span className="dash-title">LANGUAGE &amp; TECHNOLOGY PROFICIENCY DASHBOARD</span>
          <span className="dash-sub">VISUAL LEVEL INDICATORS</span>
        </div>

        <div className="dashboard-graph-grid">
          {currentSkills.map((skill, idx) => {
            const ratio = skill.fillRatio || skill.levelRatio || 0.85;
            const segmentCount = 10;
            const activeSegments = Math.round(ratio * segmentCount);

            return (
              <div key={idx} className="dashboard-skill-row">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-tag-cat">{skill.category}</span>
                </div>

                {/* Dashboard Bar Indicator (NO NUMBERS) */}
                <div className="dashboard-graph-bar-wrapper">
                  <div className="graph-segments">
                    {Array.from({ length: segmentCount }).map((_, sIdx) => (
                      <div
                        key={sIdx}
                        className={`graph-segment ${sIdx < activeSegments ? "active" : ""}`}
                      />
                    ))}
                  </div>
                  <div 
                    className="graph-bar-fill" 
                    style={{ width: `${ratio * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

