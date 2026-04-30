// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { Mail, Linkedin, Github, FileText, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-text">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>
            <div className="contact-methods">
              <a href="mailto:shaikazeemcse@gmail.com" className="contact-item">
                <Mail size={20} />
                <span>shaikazeemcse@gmail.com</span>
              </a>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <h3 className="download-title">Ready to hire?</h3>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-resume-btn">
              <FileText size={20} />
              Download Full Resume
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vansh. Built with React & Three.js.</p>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Scroll to Top">
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;