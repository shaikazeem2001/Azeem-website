import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, Globe, MapPin } from "lucide-react";
import "./Profile.css";

const Profile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    "React.js",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Express",
    "Git"
  ];

  const languages = ["English", "Hindi", "Telugu"];

  return (
    <div className="profile-section" ref={ref}>
      <motion.div 
        className="profile-header"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="icon-box">
          <User size={32} color="#000" />
        </div>
        <h2 className="profile-title">About Me</h2>
      </motion.div>

      <motion.div 
        className="bento-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Bio Card */}
        <motion.div 
          className="bento-card bio-card"
          whileHover={{ scale: 1.02, borderColor: "rgba(1, 254, 152, 0.3)" }}
        >
          <div className="card-icon">
            <Code size={24} color="#01FE98" />
          </div>
          <h3>Web Developer & Student</h3>
          <p>Passionate about learning new technologies and building modern web applications with a focus on backend development.</p>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div 
          className="bento-card tech-card"
          whileHover={{ scale: 1.02, borderColor: "rgba(1, 254, 152, 0.3)" }}
        >
          <div className="card-header">
            <Code size={20} color="#01FE98" />
            <h3>Tech Stack</h3>
          </div>
          <div className="tech-badges">
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(1, 254, 152, 0.2)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Languages Card */}
        <motion.div 
          className="bento-card lang-card"
          whileHover={{ scale: 1.02, borderColor: "rgba(1, 254, 152, 0.3)" }}
        >
          <div className="card-header">
            <Globe size={20} color="#01FE98" />
            <h3>Languages</h3>
          </div>
          <div className="lang-list">
            {languages.map((lang, index) => (
              <motion.div 
                key={index} 
                className="lang-item"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <MapPin size={16} color="#01FE98" />
                <span>{lang}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div 
          className="bento-card location-card"
          whileHover={{ scale: 1.02, borderColor: "rgba(1, 254, 152, 0.3)" }}
        >
          <div className="location-content">
            <MapPin size={32} color="#01FE98" />
            <div>
              <h4>Based in</h4>
              <h3>India 🇮🇳</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
