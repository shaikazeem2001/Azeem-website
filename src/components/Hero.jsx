import React, { lazy, Suspense } from "react";
const Lottie = lazy(() => import("lottie-react"));
import animationData from "../assets/coding-animation.json";
import { motion } from "framer-motion";
import "./Hero.css";
import EncryptedText from "./EncryptedText";

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

  return (
    <div className="hero-container" id="home">
      {/* Left side: Content */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p className="p" variants={itemVariants}>Hi, I'm</motion.p>
        <motion.h1 className="name sleek-hover" variants={itemVariants}>
          Azeem
        </motion.h1>
        <motion.div variants={itemVariants}>
          <h2 className="name2 type-writer sleek-hover">
            Full-Stack Developer<span className="cursor-blink">_</span>
          </h2>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          Specializing in building scalable, user-centric web applications using
          <span className="highlight"> React</span>,
          <span className="highlight"> TypeScript</span>,
          <span className="highlight"> Node.js</span>, and
          <span className="highlight"> Three.js</span>.
        </motion.p>

        <motion.div className="cta-buttons" variants={itemVariants}>
          <a href="#projects" className="primary-btn magnetic-btn">View Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="secondary-btn magnetic-btn">
            Resume <img src="/download.png" alt="" className="btn-icon" />
          </a>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="/github.png" alt="GitHub" />
          </a>
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
          <Suspense fallback={<div className="loading-fallback">Loading animation...</div>}>
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
            />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
