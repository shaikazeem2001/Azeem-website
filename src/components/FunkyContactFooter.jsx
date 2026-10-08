import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';
import './FunkyContactFooter.css';

const FunkyContactFooter = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("shaikazeemcse@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="nature-footer-section" id="contact">
      {/* Top Border Organic Wave Transition - Cutting from Dark Arcade into Cream Sky */}
      <div className="footer-top-wave-transition">
        <svg 
          className="top-wave-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 160" 
          preserveAspectRatio="none"
        >
          {/* Wave 1 Translucent Accent */}
          <path 
            fill="rgba(132, 204, 22, 0.45)" 
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,53.3C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,160L0,160Z" 
            className="wave-anim-layer wave-layer-1"
          />
          {/* Wave 2 Teal Transition Accent */}
          <path 
            fill="rgba(77, 117, 108, 0.65)" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,101.3C960,107,1056,85,1152,74.7C1248,64,1344,21,1392,0L1440,0L1440,160L0,160Z" 
            className="wave-anim-layer wave-layer-2"
          />
          {/* Wave 3 Solid Cream Sky Transition */}
          <path 
            fill="#FAF9F6" 
            d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,80C672,75,768,85,864,96C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,160L0,160Z" 
            className="wave-anim-layer wave-layer-3"
          />
        </svg>
      </div>

      {/* Mountain & Pine Forest Landscape SVG Graphic Container */}
      <div className="footer-mountain-landscape">
        <svg 
          className="mountain-svg" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Sky Layer */}
          <rect width="1440" height="320" fill="#FAF9F6" />

          {/* Far Mountain Layer 1 */}
          <path 
            fill="#7C9A92" 
            fillOpacity="0.5" 
            d="M0,180L60,173C120,166,240,152,360,165C480,178,600,218,720,200C840,182,960,105,1080,118C1200,131,1320,234,1380,270L1440,300L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          
          {/* Mid Mountain Layer 2 */}
          <path 
            fill="#4D756C" 
            fillOpacity="0.8" 
            d="M0,230L80,208C160,186,320,142,480,153C640,164,800,230,960,230C1120,230,1280,164,1360,131L1440,98L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />

          {/* Central Lookout Tower Vector */}
          <g transform="translate(680, 65) scale(0.95)">
            {/* Tower Cabin */}
            <rect x="30" y="30" width="40" height="28" fill="#1B3B34" rx="2" />
            <polygon points="25,30 50,12 75,30" fill="#112722" />
            <rect x="36" y="36" width="8" height="12" fill="#84CC16" opacity="0.9" />
            <rect x="56" y="36" width="8" height="12" fill="#84CC16" opacity="0.9" />
            {/* Tower Frame Legs & X-Bracing */}
            <line x1="32" y1="58" x2="15" y2="160" stroke="#112722" strokeWidth="3" />
            <line x1="68" y1="58" x2="85" y2="160" stroke="#112722" strokeWidth="3" />
            <line x1="15" y1="90" x2="85" y2="130" stroke="#112722" strokeWidth="1.5" />
            <line x1="85" y1="90" x2="15" y2="130" stroke="#112722" strokeWidth="1.5" />
            <line x1="25" y1="90" x2="75" y2="90" stroke="#112722" strokeWidth="2" />
            <line x1="20" y1="130" x2="80" y2="130" stroke="#112722" strokeWidth="2" />
          </g>

          {/* Foreground Pine Forest Silhouettes */}
          <path 
            fill="#142B25" 
            d="M0,320 L0,250 L20,230 L40,250 L60,220 L80,255 L100,200 L120,255 L150,210 L180,260 L210,185 L240,260 L270,215 L300,265 L340,180 L380,270 L420,200 L460,275 L500,170 L540,275 L580,200 L620,280 L660,185 L700,280 L740,200 L780,280 L820,175 L860,280 L900,210 L940,285 L980,170 L1020,285 L1060,205 L1100,285 L1140,180 L1180,290 L1220,215 L1260,290 L1300,190 L1340,290 L1380,210 L1420,290 L1440,230 L1440,320 Z"
          />
        </svg>
      </div>

      {/* Cream Footer Content Stage */}
      <div className="footer-cream-content-stage">
        <div className="footer-columns-wrapper">
          {/* Column 1: Quick Links */}
          <div className="footer-col">
            <h4 className="col-header-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home Overview</a></li>
              <li><a href="#story">Azeem's Career Story</a></li>
              <li><a href="#skills">Skills &amp; OS Dashboard</a></li>
              <li><a href="#projects">3D Arc Projects</a></li>
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div className="footer-col">
            <h4 className="col-header-title">Engineering Stack</h4>
            <ul className="footer-links-list">
              <li><a href="#skills">MongoDB &amp; Node.js APIs</a></li>
              <li><a href="#skills">React &amp; Next.js Systems</a></li>
              <li><a href="#skills">Applied AI Vector RAG</a></li>
              <li><a href="#skills">GCP Cloud &amp; Terraform</a></li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="footer-col">
            <h4 className="col-header-title">Direct Contact</h4>
            <ul className="footer-contact-list">
              <li><Mail size={15} className="c-icon" /> shaikazeemcse@gmail.com</li>
              <li><Phone size={15} className="c-icon" /> (205) 715-3279</li>
              <li><MapPin size={15} className="c-icon" /> Birmingham, AL (Open for Relocation)</li>
              <li className="edu-tag-line">MS CS @ University of Alabama at Birmingham ('26)</li>
            </ul>
          </div>

          {/* Column 4: Social Circle Buttons & Brand Details */}
          <div className="footer-col footer-col-brand">
            <h3 className="footer-brand-title">Azeem Shaik <span className="green-dot">.dev</span></h3>
            <p className="brand-subtext">Software Engineer with 3+ years experience building production backend APIs, React applications, and Applied AI systems.</p>

            <div className="footer-social-circles">
              <button className="social-circle-btn" onClick={copyEmail} title="Copy Email">
                {copied ? <Check size={16} /> : <Mail size={16} />}
              </button>
              <a 
                href="https://github.com/shaikazeem2001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shaik-azeem-817886233/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="/Azeem_SE.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-circle-btn"
                title="Resume PDF"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar matching reference bottom line */}
        <div className="footer-bottom-legal-bar">
          <div className="legal-left-links">
            <span className="brand-logo-mini">AZEEM.DEV</span>
            <a href="/Azeem_SE.pdf" target="_blank" rel="noopener noreferrer">Resume PDF <ArrowUpRight size={12} /></a>
            <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} /></a>
            <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
          </div>

          <div className="legal-right-credits">
            <span>Coded &amp; Designed by Azeem Shaik. All rights reserved © 2026.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FunkyContactFooter;
