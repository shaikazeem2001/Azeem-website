import React, { useState } from "react";
import { motion } from "framer-motion";
import "./RadialSkillWheel.css";

const RANDOM_COLORS = [
  "#b6fe01", "#ec4899", "#38bdf8", "#f59e0b", "#a855f7", 
  "#10b981", "#f43f5e", "#06b6d4", "#fbbf24", "#c084fc",
  "#34d399", "#fb7185", "#60a5fa", "#a3e635", "#f472b6"
];

export const SKILL_CATEGORIES = {
  "Top Overview": [
    { name: "HTML5", level: 88, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Responsive Web", level: 85, color: "rgba(254, 240, 138, 0.9)" },
    { name: "CSS3", level: 82, color: "rgba(254, 240, 138, 0.9)" },
    { name: "React.js", level: 78, color: "rgba(254, 240, 138, 0.9)" },
    { name: "JavaScript", level: 72, color: "rgba(254, 240, 138, 0.9)" },
    { name: "REST APIs", level: 72, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Express.js", level: 70, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Node.js", level: 68, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Git / GitHub", level: 70, color: "rgba(56, 189, 248, 0.9)" },
    { name: "MongoDB", level: 68, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Vercel", level: 65, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Debugging", level: 65, color: "rgba(192, 132, 252, 0.9)" },
  ],
  "Frontend": [
    { name: "HTML5", level: 88, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Responsive Web", level: 85, color: "rgba(254, 240, 138, 0.9)" },
    { name: "CSS3", level: 82, color: "rgba(254, 240, 138, 0.9)" },
    { name: "React.js", level: 78, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Frontend Dev", level: 78, color: "rgba(254, 240, 138, 0.9)" },
    { name: "WordPress", level: 75, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Axios", level: 75, color: "rgba(254, 240, 138, 0.9)" },
    { name: "React Router", level: 75, color: "rgba(254, 240, 138, 0.9)" },
    { name: "JavaScript", level: 72, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Vite", level: 72, color: "rgba(254, 240, 138, 0.9)" },
    { name: "Tailwind CSS", level: 72, color: "rgba(254, 240, 138, 0.9)" },
    { name: "State Management", level: 55, color: "rgba(254, 240, 138, 0.9)" },
  ],
  "Backend": [
    { name: "REST APIs", level: 72, color: "rgba(74, 222, 128, 0.9)" },
    { name: "API Integration", level: 72, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Express.js", level: 70, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Auth & Security", level: 70, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Full-Stack Dev", level: 70, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Node.js", level: 68, color: "rgba(74, 222, 128, 0.9)" },
    { name: "JWT Auth", level: 68, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Backend Dev", level: 65, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Socket.IO", level: 65, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Clerk", level: 65, color: "rgba(74, 222, 128, 0.9)" },
    { name: "Payment Gateway", level: 45, color: "rgba(74, 222, 128, 0.9)" },
  ],
  "DevOps & DB": [
    { name: "Git / GitHub", level: 70, color: "rgba(56, 189, 248, 0.9)" },
    { name: "MongoDB", level: 68, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Mongoose", level: 65, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Vercel", level: 65, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Railway", level: 60, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Firebase", level: 60, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Google Analytics", level: 60, color: "rgba(56, 189, 248, 0.9)" },
    { name: "Database Design", level: 55, color: "rgba(56, 189, 248, 0.9)" },
    { name: "SQL", level: 50, color: "rgba(56, 189, 248, 0.9)" },
  ],
  "CS & AI": [
    { name: "Debugging", level: 65, color: "rgba(192, 132, 252, 0.9)" },
    { name: "Big-O / Complexity", level: 55, color: "rgba(192, 132, 252, 0.9)" },
    { name: "DSA / Problem Solving", level: 45, color: "rgba(192, 132, 252, 0.9)" },
    { name: "Python", level: 40, color: "rgba(192, 132, 252, 0.9)" },
    { name: "AI/ML Concepts", level: 38, color: "rgba(192, 132, 252, 0.9)" },
  ]
};

export default function RadialSkillWheel() {
  const [activeCategory, setActiveCategory] = useState("Top Overview");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentSkills = SKILL_CATEGORIES[activeCategory] || SKILL_CATEGORIES["Top Overview"];

  const cx = 400;
  const cy = 400;
  const rMin = 50;
  const rMax = 270;
  const total = currentSkills.length;
  const angleStep = 360 / total;

  // Wedge Arc Path Generator
  const createWedgePath = (rIn, rOut, startDeg, endDeg) => {
    const sRad = ((startDeg - 90) * Math.PI) / 180;
    const eRad = ((endDeg - 90) * Math.PI) / 180;

    const x1 = cx + rOut * Math.cos(sRad);
    const y1 = cy + rOut * Math.sin(sRad);
    const x2 = cx + rOut * Math.cos(eRad);
    const y2 = cy + rOut * Math.sin(eRad);

    const x3 = cx + rIn * Math.cos(eRad);
    const y3 = cy + rIn * Math.sin(eRad);
    const x4 = cx + rIn * Math.cos(sRad);
    const y4 = cy + rIn * Math.sin(sRad);

    const largeArc = endDeg - startDeg > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${rOut} ${rOut} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rIn} ${rIn} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  // Concentric Rings radii
  const gridRings = [0.2, 0.4, 0.6, 0.8, 1.0].map((ratio) => rMin + (rMax - rMin) * ratio);

  return (
    <div className="pure-radial-wrapper">
      {/* Category Tabs */}
      <div className="radial-category-tabs">
        {Object.keys(SKILL_CATEGORIES).map((cat) => (
          <button
            key={cat}
            className={`radial-tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat);
              setHoveredIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SVG Radial Chart (No Box Container) */}
      <div className="pure-radial-stage">
        <svg viewBox="0 0 800 800" className="pure-radial-svg">
          <defs>
            <filter id="petalGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Concentric Polar Grid Rings */}
          {gridRings.map((r, idx) => (
            <circle
              key={idx}
              cx={cx}
              cy={cy}
              r={r}
              className="polar-grid-circle"
            />
          ))}

          {/* Radial Dividers */}
          {currentSkills.map((_, i) => {
            const angle = i * angleStep - 90;
            const rad = (angle * Math.PI) / 180;
            const x2 = cx + (rMax + 30) * Math.cos(rad);
            const y2 = cy + (rMax + 30) * Math.sin(rad);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                className="polar-grid-spoke"
              />
            );
          })}

          {/* Skill Wedges & Embedded Labels */}
          {currentSkills.map((skill, index) => {
            const startDeg = index * angleStep + 0.8;
            const endDeg = (index + 1) * angleStep - 0.8;
            const midDeg = (startDeg + endDeg) / 2;
            const midRad = ((midDeg - 90) * Math.PI) / 180;

            const isHovered = hoveredIndex === index;
            const fillRadius = rMin + (rMax - rMin) * (skill.level / 100);

            // Pop distance vector on hover
            const popDist = isHovered ? 16 : 0;
            const popX = popDist * Math.cos(midRad);
            const popY = popDist * Math.sin(midRad);

            // Unique random vibrant color per skill
            const randomColor = RANDOM_COLORS[index % RANDOM_COLORS.length];

            // Radial Text Coordinates
            const textDist = Math.max(fillRadius + 24, rMin + 60);
            const lx = cx + textDist * Math.cos(midRad);
            const ly = cy + textDist * Math.sin(midRad);

            // Keep text upright
            let rotationAngle = midDeg;
            if (midDeg > 90 && midDeg < 270) {
              rotationAngle += 180;
            }

            return (
              <g
                key={skill.name}
                className={`pure-wedge-group ${isHovered ? "hovered" : ""}`}
                transform={`translate(${popX}, ${popY})`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Outer Dark Slot Path */}
                <path
                  d={createWedgePath(rMin, rMax, startDeg, endDeg)}
                  className="wedge-bg-slot"
                />

                {/* Inner Level Filled Path */}
                <path
                  d={createWedgePath(rMin, fillRadius, startDeg, endDeg)}
                  className="wedge-fill-path"
                  fill={isHovered ? randomColor : skill.color}
                  filter={isHovered ? "url(#petalGlow)" : "none"}
                />

                {/* Skill Name & Percentage Label on Chart */}
                <g
                  transform={`translate(${lx}, ${ly}) rotate(${rotationAngle})`}
                  className="wedge-label-group"
                >
                  {/* Percentage Number - Enlarges & Changes Color on Hover */}
                  <text
                    x="0"
                    y="-5"
                    className="wedge-percentage"
                    fill={isHovered ? randomColor : "#ffffff"}
                    style={{
                      fontSize: isHovered ? "20px" : "13px",
                      fontWeight: isHovered ? "900" : "700",
                      transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  >
                    {skill.level}%
                  </text>

                  {/* Skill Name - Enlarges on Hover */}
                  <text
                    x="0"
                    y="11"
                    className="wedge-skill-title"
                    fill={isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.85)"}
                    style={{
                      fontSize: isHovered ? "15px" : "11px",
                      fontWeight: isHovered ? "800" : "600",
                      transition: "all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    }}
                  >
                    {skill.name}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Outer Boundary Ring */}
          <circle cx={cx} cy={cy} r={rMax + 30} className="polar-outer-boundary" />

          {/* Center Hub */}
          <circle cx={cx} cy={cy} r="22" fill="#050810" stroke="#b6fe01" strokeWidth="2.5" />
          <circle cx={cx} cy={cy} r="8" fill="#b6fe01" />
        </svg>
      </div>
    </div>
  );
}
