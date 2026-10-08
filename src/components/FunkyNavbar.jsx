import React, { useState } from 'react';
import { Download, Sparkles, Volume2, VolumeX, Menu, X, Code2 } from 'lucide-react';
import './FunkyNavbar.css';

const FunkyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <header className="funky-navbar-wrapper">
      <div className="funky-navbar-container modern-card">
        {/* Brand Logo & Sticker */}
        <div className="navbar-brand-group">
          <a href="#hero" className="brand-title">
            AZEEM<span className="brand-dot">.DEV</span>
          </a>
          <span className="modern-badge">2026 LAB</span>
        </div>

        {/* Status Pill Badge */}
        <div className="status-hire-badge">
          <span className="status-dot"></span>
          <span>AVAILABLE FOR HIRE</span>
        </div>

        {/* Nav Links */}
        <nav className={`funky-nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Career Story</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills & OS</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>3D Arc Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button 
            className={`sound-toggle-btn ${soundEnabled ? 'active' : ''}`}
            onClick={toggleSound}
            title={soundEnabled ? "Mute Audio" : "Enable Audio"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          <a 
            href="/Azeem_SE.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="modern-btn nav-resume-btn"
          >
            <Download size={15} /> Resume PDF
          </a>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default FunkyNavbar;
