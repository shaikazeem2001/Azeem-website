import React from "react";
import { motion } from "framer-motion";
import { Download, Linkedin, Github, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-broadsheet-container" id="home">
      {/* Front Page Lead Headline Banner */}
      <motion.div 
        className="hero-headline-banner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="headline-tag-bar">
          <span className="headline-tag">✦ EXCLUSIVE TECH DISPATCH ✦</span>
        </div>

        <h1 className="hero-main-headline">
          SOFTWARE ENGINEER DELIVERS HIGH-PERFORMANCE BACKEND &amp; AI SOLUTIONS
        </h1>

        <p className="hero-subheadline">
          Azeem Shaik Brings 3+ Years of Experience at MongoDB &amp; EPAM Systems to Scalable Cloud Services, Database Optimization, and LLM Engineering
        </p>
      </motion.div>

      {/* 3-Column Newspaper Broadsheet Grid */}
      <div className="broadsheet-grid">
        {/* Column 1: Lead Front Page Story & Contact Telegraph */}
        <motion.div 
          className="broadsheet-col col-main"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="col-header-line">
            <span className="col-title">THE FRONT PAGE STORY</span>
          </div>

          <p className="hero-description drop-cap">
            Software Engineer with 3+ years of experience at EPAM Systems and MongoDB, developing backend services and React applications. Work spans API development, database performance, asynchronous processing, and automated delivery. Applied AI experience includes integrating LLM features into engineering workflows and evaluating document retrieval, cited answers, and access controls.
          </p>

          {/* Vintage Telegraph Business Card Box */}
          <div className="telegraph-card news-border-box">
            <div className="telegraph-header">
              <span className="stamp-verified">VERIFIED DISPATCH</span>
              <span className="telegraph-title">ENGINEER TELEGRAPH</span>
            </div>
            <div className="telegraph-grid">
              <div className="telegraph-item">
                <span className="telegraph-label">NAME:</span>
                <span className="telegraph-val">Azeem Shaik</span>
              </div>
              <div className="telegraph-item">
                <span className="telegraph-label">TITLE:</span>
                <span className="telegraph-val">SOFTWARE ENGINEER</span>
              </div>
              <div className="telegraph-item">
                <span className="telegraph-label">PHONE:</span>
                <span className="telegraph-val">(205) 715-3279</span>
              </div>
              <div className="telegraph-item">
                <span className="telegraph-label">EMAIL:</span>
                <span className="telegraph-val">shaikazeemcse@gmail.com</span>
              </div>
              <div className="telegraph-item col-span-2">
                <span className="telegraph-label">LOCATION:</span>
                <span className="telegraph-val">Birmingham, AL <i>(Open for Relocation)</i></span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="news-btn primary-news-btn">
              EXPLORE SPECIAL REPORTS ➔
            </a>
            <a href="/Azeem_SE.pdf" target="_blank" rel="noopener noreferrer" className="news-btn secondary-news-btn">
              DOWNLOAD RESUME PDF <Download size={16} />
            </a>
            <div className="news-socials">
              <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Column 2: Framed Press Photograph (User Photo by Window) */}
        <motion.div 
          className="broadsheet-col col-photo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="press-photo-frame">
            <div className="news-tape-corner" />
            <div className="photo-inner">
              <img 
                src="/azeem-photo.jpg" 
                alt="Azeem Shaik" 
                className="press-img"
              />
            </div>
            <div className="photo-caption">
              <strong>FIG 1. — AZEEM SHAIK.</strong> Software Engineer &amp; MS Computer Science candidate. On-location in Birmingham, AL.
            </div>
          </div>
        </motion.div>

        {/* Column 3: Breakout News Metric Boxes (Image 1 Spotify style) */}
        <motion.div 
          className="broadsheet-col col-metrics"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="news-box-metric">
            <div className="metric-header">STATISTICAL BULLETIN #01</div>
            <div className="metric-big">3+ YEARS</div>
            <div className="metric-desc">Proven backend &amp; full-stack software development experience at MongoDB &amp; EPAM.</div>
            <div className="metric-date">JUN 2022 - PRESENT</div>
          </div>

          <div className="news-box-metric">
            <div className="metric-header">STATISTICAL BULLETIN #02</div>
            <div className="metric-big">30% CUT</div>
            <div className="metric-desc">Reduction in redundant database calls and 20% API response time improvement.</div>
            <div className="metric-date">MONGODB INC.</div>
          </div>

          <div className="news-box-metric">
            <div className="metric-header">STATISTICAL BULLETIN #03</div>
            <div className="metric-big">110 MS</div>
            <div className="metric-desc">Console query response time achieved down from 180 ms via compound indexing.</div>
            <div className="metric-date">PERFORMANCE REPORT</div>
          </div>

          <div className="news-box-metric">
            <div className="metric-header">STATISTICAL BULLETIN #04</div>
            <div className="metric-big">84% RECALL</div>
            <div className="metric-desc">Recall@5 benchmark accuracy for Atlas Vector Search in RAG document retrieval.</div>
            <div className="metric-date">APPLIED AI REPORT</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

