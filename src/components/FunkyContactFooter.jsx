import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, Check } from 'lucide-react';
import './FunkyContactFooter.css';

const FunkyContactFooter = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    if (e) e.preventDefault();
    navigator.clipboard.writeText("shaikazeemcse@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="minimal-studio-footer-wrap" id="contact">
      <div className="minimal-studio-footer-card">
        {/* Top Brand Logo & Sub-Tags matching reference image */}
        <div className="studio-top-brand-area">
          <div className="studio-brand-logo-wrap">
            {/* Geometric White Emblem matching image */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="studio-brand-icon"
              aria-hidden="true"
            >
              <path
                d="M4 5C4 4.44772 4.44772 4 5 4H12C17.5228 4 22 8.47715 22 14V19C22 19.5523 21.5523 20 21 20H5C4.44772 20 4 19.5523 4 19V5Z"
                fill="#FFFFFF"
              />
            </svg>
            <span className="studio-brand-title">Azeem</span>
          </div>

          <div className="studio-specialties-row">
            <span>● FULL-STACK DEVELOPMENT</span>
            <span>● DISTRIBUTED SYSTEMS &amp; CLOUD</span>
            <span>● MODERN UI/UX ARCHITECTURE</span>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="studio-divider" />

        {/* Clean Nav Links matching image */}
        <nav className="studio-nav-links">
          <a href="#projects">Works</a>
          <a href="#skills">Services</a>
          <a href="#story">About</a>
          <a href="/Azeem_SE.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact" onClick={copyEmail}>Contact us</a>
        </nav>

        {/* 4 Rounded Square Icon Buttons matching image */}
        <div className="studio-social-row">
          <button
            className="studio-icon-btn"
            onClick={copyEmail}
            title="Copy Email: shaikazeemcse@gmail.com"
            aria-label="Email"
          >
            {copied ? <Check size={18} strokeWidth={2.2} /> : <Mail size={18} strokeWidth={2.2} />}
          </button>
          <a
            href="https://github.com/shaikazeem2001"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-icon-btn"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={2.2} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-azeem-817886233/"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-icon-btn"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={2.2} />
          </a>
          <a
            href="/Azeem_SE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-icon-btn"
            title="Download Resume PDF"
            aria-label="Resume PDF"
          >
            <Download size={18} strokeWidth={2.2} />
          </a>
        </div>

        {/* Bottom Legal / Meta Links & Copyright */}
        <div className="studio-bottom-area">
          <div className="studio-legal-links">
            <a href="#contact" onClick={copyEmail}>Terms &amp; Conditions</a>
            <span className="studio-sep">|</span>
            <a href="#contact" onClick={copyEmail}>Privacy Policy</a>
            <span className="studio-sep">|</span>
            <a href="mailto:shaikazeemcse@gmail.com">shaikazeemcse@gmail.com</a>
          </div>

          <div className="studio-copyright">
            © 2026 Azeem Shaik. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FunkyContactFooter;
