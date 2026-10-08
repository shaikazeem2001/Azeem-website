// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { Mail, Linkedin, Github, FileText, ArrowUp, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-newspaper-section" id="contact">
      {/* Rule Divider */}
      <div className="news-section-rule">
        <span className="news-section-rule-title">SECTION V — TELEGRAPH &amp; PRESS CONTACT</span>
      </div>

      <div className="footer-newspaper-container news-paper-card">
        <div className="news-tape-corner" />

        <div className="footer-content-grid">
          {/* Left Column: Contact Dispatch */}
          <div className="footer-left-dispatch">
            <div className="dispatch-header-tag">
              <span className="stamp-classified">PRESS DISPATCH</span>
              <span className="dispatch-sub">COMMUNICATION LINES OPEN</span>
            </div>

            <h2 className="footer-newspaper-title">SEND A TELEGRAPH TO AZEEM SHAIK</h2>

            <p className="footer-newspaper-text">
              Always open to discussing software engineering roles, technical architecture challenges, AI integrations, or collaborative projects.
            </p>

            <div className="telegraph-contact-list">
              <a href="mailto:shaikazeemcse@gmail.com" className="contact-line-item">
                <Mail size={18} />
                <span>shaikazeemcse@gmail.com</span>
              </a>

              <div className="contact-line-item">
                <Phone size={18} />
                <span>(205) 715-3279</span>
              </div>

              <div className="contact-line-item">
                <MapPin size={18} />
                <span>Birmingham, AL <i>(Open for Relocation)</i></span>
              </div>
            </div>

            <div className="footer-social-row">
              <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" className="social-news-btn">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" className="social-news-btn">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Download Resume Action */}
          <div className="footer-right-action">
            <div className="action-box news-border-box">
              <span className="stamp-verified">OFFICIAL RESUME</span>
              <h3 className="download-heading">READY TO HIRE FOR YOUR TEAM?</h3>
              <p className="download-desc">Review full 1-page engineering resume PDF with complete bullet breakdown.</p>
              
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="news-btn primary-news-btn">
                <FileText size={16} /> DOWNLOAD RESUME PDF 🗞
              </a>
            </div>
          </div>
        </div>

        {/* Newspaper Footer Rule Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Azeem Shaik. Published by The NYC Gazette • All Rights Reserved.</p>
          <button onClick={scrollToTop} className="scroll-top-news-btn" title="Back to Masthead">
            BACK TO MASTHEAD <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;