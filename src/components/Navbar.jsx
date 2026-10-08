// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="newspaper-header-banner">
      {/* Top Edition Information Bar */}
      <div className="newspaper-top-bar">
        <span>VOL. IV NO. 107</span>
        <span className="bullet-dot">•</span>
        <span>BIRMINGHAM, AL &amp; NEW YORK</span>
        <span className="bullet-dot">•</span>
        <span>SPECIAL TECH EDITION</span>
        <span className="bullet-dot">•</span>
        <span>OCTOBER 2026</span>
        <span className="bullet-dot">•</span>
        <span>PRICE FIVE CENTS</span>
      </div>

      {/* Main Newspaper Masthead Bar */}
      <div className="newspaper-masthead">
        <div className="masthead-left">
          <span className="weather-box">WEATHER: HIGH 72° • DEPLOYMENT READY</span>
        </div>

        <div className="masthead-center">
          <NavLink to="/" className="masthead-title">
            Azeem's Story
          </NavLink>
          <div className="masthead-subline">
            <span>"ALL THE CODE THAT'S FIT TO DEPLOY"</span>
          </div>
        </div>

        <div className="masthead-right">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="edition-badge">
            RESUME PDF 🗞
          </a>
        </div>
      </div>

      {/* Navigation Rules Bar */}
      <nav className="newspaper-nav-bar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰ MENU
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>FRONT PAGE</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT AZEEM</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>SPECIAL REPORTS</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>CLASSIFIEDS & SKILLS</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>TELEGRAPH</a>
          <NavLink
            to="/personal"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            PERSONAL ARCHIVE
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

