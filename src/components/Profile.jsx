import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code } from "lucide-react";
import "./Profile.css";
import RadialSkillWheel from "./RadialSkillWheel";

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="profile-section" id="about" ref={ref}>
      <div className="section-container">
        {/* About Me Scrapbook Card Section */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="scrapbook-card">
            {/* Grid Pattern Background */}
            <div className="scrapbook-grid-pattern" />

            {/* Left Column: Bio Text & Info */}
            <div className="scrapbook-left">
              <div className="section-header">
                <div className="icon-box">
                  <User size={24} color="#000" />
                </div>
                <h2 className="section-title">About Me</h2>
              </div>

              <div className="bio-text">
                <p>
                  I am a <strong>Master's in Computer Science</strong> student and an entry-level software engineer driven by building high-performance, scalable web applications. My focus is on creating seamless user experiences through clean code and efficient backend architectures.
                </p>
                <p>
                  I enjoy solving complex technical challenges and am currently looking for roles where I can contribute to impactful projects while continuing to grow as a full-stack developer. Based in <strong>India 🇮🇳</strong>, I am open to both remote and on-site opportunities.
                </p>
              </div>
            </div>

            {/* Right Column: Avatar Photo with Handwritten Doodle Callouts */}
            <div className="scrapbook-avatar-wrapper">
              {/* Doodle Callout 1 - Top Left */}
              <motion.div 
                className="doodle-callout doodle-top-left"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="doodle-arrow">⤷</span>
                <span className="doodle-text">Master's in CS 🎓</span>
              </motion.div>

              {/* Doodle Callout 2 - Mid Left */}
              <motion.div 
                className="doodle-callout doodle-mid-left"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="doodle-text">Scalable Web Apps ⚡</span>
                <span className="doodle-arrow">⤶</span>
              </motion.div>

              {/* Doodle Callout 3 - Top Right */}
              <motion.div 
                className="doodle-callout doodle-top-right"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <span className="doodle-text">Based in India 🇮🇳</span>
                <span className="doodle-arrow">⤴</span>
              </motion.div>

              {/* Doodle Callout 4 - Bottom Right */}
              <motion.div 
                className="doodle-callout doodle-bottom-right"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              >
                <span className="doodle-text">Remote & On-Site 🚀</span>
                <span className="doodle-arrow">⤵</span>
              </motion.div>

              {/* Avatar Image Container */}
              <motion.div 
                className="scrapbook-avatar-container"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/chatgpt-avatar.png" 
                  alt="Azeem Shaik" 
                  className="scrapbook-avatar-img"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills Section - Radial Petal Wheel & Interactive Metrics */}
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
            <h2 className="section-title">Technical Skills & Proficiency</h2>
          </div>

          {/* Nightingale Radial Petal Chart & Interactive Table */}
          <RadialSkillWheel />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
