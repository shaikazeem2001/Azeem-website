import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/coding-animation.json";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const metricsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <div className="hero-container">
      {/* Left side: Content */}
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p className="p" variants={itemVariants}>Software Engineer</motion.p>
        <motion.h1 className="name" variants={itemVariants}>
          Hello I'm <br />
        </motion.h1>
        <motion.h1 className="name2" variants={itemVariants}>Azeem Shaik</motion.h1>

        <motion.div className="icons" variants={itemVariants}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
            <img src="/download.png" alt="Download" />
          </a>
          <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer"> 
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/shaikazeem2001"  target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="github" />
          </a>
        </motion.div>

        <motion.div 
          className="metrics"
          variants={containerVariants}
        >
          <motion.div className="metric-wrapper" variants={metricsVariants}>
            <h1 className="main-metric">24</h1>
            <p className="sub-metric">age</p>
          </motion.div>
          <motion.div className="metric-wrapper" variants={metricsVariants}>
            <h1 className="main-metric">10</h1>
            <p className="sub-metric">
              projects <br /> worked <br />
              on
            </p>
          </motion.div>
          <motion.div className="metric-wrapper" variants={metricsVariants}>
            <h1 className="main-metric">5</h1>
            <p className="sub-metric">
              projects <br />
              deployed
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right side: Animation */}
      <motion.div 
        className="avatar-wrapper"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0,
        }}
      >
        <div className="avatar-animation">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
