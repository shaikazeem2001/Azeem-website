// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="nav"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div className="nav-name" variants={linkVariants}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Azeem Shaik .
        </NavLink>
      </motion.div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <motion.div 
        className={`nav-links ${menuOpen ? "open" : ""}`}
        variants={linkVariants}
      >
      <NavLink to="/" onClick={() => setMenuOpen(false)}>Professional</NavLink>

        <NavLink
          to="/personal"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Personal
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
