import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, Globe, MapPin, Briefcase } from "lucide-react";
import "./Profile.css";
import SkillCubes from "./SkillCubes";

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    languages: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3/Sass"],
    frontend: ["React.js", "Redux Toolkit", "Next.js", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "Firebase", "PostgreSQL"],
    tools: ["Git", "Docker", "Postman", "Vite", "VS Code"]
  };

  return (
    <div className="profile-section" id="about" ref={ref}>
      <div className="section-container">
        {/* About Me Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <div className="icon-box">
              <User size={24} color="#000" />
            </div>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="bio-text">
            <p>
              I am a <strong>Master's in Computer Science</strong> student and an entry-level software engineer
              driven by building high-performance, scalable web applications. My focus is on
              creating seamless user experiences through clean code and efficient backend architectures.
            </p>
            <p>
              I enjoy solving complex technical challenges and am currently looking for roles where I can
              contribute to impactful projects while continuing to grow as a full-stack developer.
              Based in <strong>India 🇮🇳</strong>, I am open to both remote and on-site opportunities.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header">
            <div className="icon-box">
              <Code size={24} color="#000" />
            </div>
            <h2 className="section-title">Technical Skills</h2>
          </div>

          <SkillCubes />

          <div className="skills-grid">
            <div className="skill-category">
              <h3><Globe size={18} /> Languages</h3>
              <div className="skill-badges">
                {skills.languages.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <h3><Code size={18} /> Frontend</h3>
              <div className="skill-badges">
                {skills.frontend.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <h3><Briefcase size={18} /> Backend</h3>
              <div className="skill-badges">
                {skills.backend.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <h3><MapPin size={18} /> Databases</h3>
              <div className="skill-badges">
                {skills.databases.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <h3><Briefcase size={18} /> Tools & Platforms</h3>
              <div className="skill-badges">
                {skills.tools.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
