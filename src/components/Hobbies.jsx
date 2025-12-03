import React from "react";
import { motion } from "framer-motion";
import "./Hobbies.css";

const Hobbies = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <div>
      <div className="heading">
        <motion.h1 
          className="main-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello again
        </motion.h1> 
        
        <motion.h1 
          className="second-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          These are some of my hobbies
        </motion.h1>
      </div>
      <motion.div 
        className="hobbie-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { img: "/books.jpeg", text: "Fictional Books" },
          { img: "/pc.jpeg", text: "Computer Science" },
          { img: "/games.jpeg", text: "Playing Games" },
          { img: "/movie.jpeg", text: "Watching Movies" },
          { img: "/photography.png", text: "Photography" },
          { img: "/music.png", text: "Listening to Music" },
        ].map((hobby, index) => (
          <motion.div 
            className="card"
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5, 
              rotateX: -5,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              borderColor: "rgba(1, 254, 152, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img src={hobby.img} alt={hobby.text} />
            <div className="text-overlay">{hobby.text}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hobbies;
