import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      school: "University of Alabama at Birmingham",
      degree: "Masters in Computer Science",
      year: "2024 - 2026",
      location: "Birmingham, AL",
      color: "#01FE98"
    },
    {
      school: "Annamacharya Institute of Technology And Sciences",
      degree: "Bachelors of Technology in Computer Science",
      year: "2019 - 2023",
      location: "India",
      color: "#00c978"
    },
    {
      school: "Sri Chaitanya Engineering College",
      degree: "Maths-Physics-Chemistry",
      year: "2017 - 2019",
      location: "India",
      color: "#009b5c"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="education-section" ref={ref}>
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="icon-box">
          <GraduationCap size={32} color="#000" />
        </div>
        <h2 className="section-title">Education</h2>
      </motion.div>

      <motion.div 
        className="timeline-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {educationData.map((item, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            variants={itemVariants}
            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="timeline-marker" style={{ borderColor: item.color }}></div>
            <div className="timeline-content">
              <h3 className="school-name">{item.school}</h3>
              <h4 className="degree">{item.degree}</h4>
              <div className="meta-info">
                <span className="meta-tag">
                  <Calendar size={14} /> {item.year}
                </span>
                <span className="meta-tag">
                  <MapPin size={14} /> {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
