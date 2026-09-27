import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";
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
        <motion.h1 className="name-wrapper" variants={itemVariants}>
          <span className="funky-name">
            {["A", "z", "e", "e", "m"].map((letter, index) => (
              <motion.span
                key={index}
                className="funky-letter"
                whileHover={{
                  scale: 1.35,
                  y: -14,
                  rotate: index % 2 === 0 ? -10 : 10,
                  transition: { type: "spring", stiffness: 450, damping: 12 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
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
            Resume <Download size={18} className="btn-icon" />
          </a>
        </motion.div>

        <motion.div className="social-links" variants={itemVariants}>
          <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" title="GitHub">
            <Github size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Right side: Custom Hero Image with Animated Butterflies & Cat Float */}
      <motion.div
        className="avatar-wrapper"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
          delay: 0.2,
        }}
      >
        {/* Animated Butterfly 1 - Top Right Flutter */}
        <motion.div
          className="butterfly-container butterfly-1"
          animate={{
            x: [0, 22, -18, 16, 0],
            y: [0, -28, -12, -36, 0],
            rotate: [0, 12, -10, 14, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="butterfly-body">
            <motion.span
              className="butterfly-wing wing-left"
              animate={{ rotateY: [0, 70, 0, 70, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="butterfly-wing wing-right"
              animate={{ rotateY: [0, -70, 0, -70, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="butterfly-glow" />
          </div>
        </motion.div>

        {/* Animated Butterfly 2 - Bottom Left Flutter near Cat */}
        <motion.div
          className="butterfly-container butterfly-2"
          animate={{
            x: [0, -28, 20, -14, 0],
            y: [0, -22, -42, -18, 0],
            rotate: [0, -14, 10, -8, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <div className="butterfly-body">
            <motion.span
              className="butterfly-wing wing-left wing-cyan"
              animate={{ rotateY: [0, 65, 0, 65, 0] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="butterfly-wing wing-right wing-cyan"
              animate={{ rotateY: [0, -65, 0, -65, 0] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="butterfly-glow glow-cyan" />
          </div>
        </motion.div>

        {/* Ambient Backlight Glow */}
        <div className="hero-avatar-glow" />

        {/* Floating Hero Avatar Container */}
        <motion.div
          className="hero-image-box"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/home-azeem.png" 
            alt="Azeem Shaik" 
            className="hero-avatar-img"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
