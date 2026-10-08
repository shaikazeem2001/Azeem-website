import React from 'react';
import './Background.css';

const AnimatedBackground = () => {
  return (
    <div className="crumpled-paper-bg-wrapper">
      {/* SVG Noise & Paper Crease Filter Definition */}
      <svg className="svg-paper-filter-defs">
        <filter id="crumpledPaperFilter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#fff" surfaceScale="2" result="light">
            <feDistantLight azimuth="60" elevation="50" />
          </feDiffuseLighting>
          <feBlend mode="multiply" in="SourceGraphic" in2="light" result="blend" />
        </filter>
      </svg>

      {/* 1. Crumpled Parchment Base */}
      <div className="crumpled-paper-base" />

      {/* 2. Graph Paper Grid Lines */}
      <div className="graph-paper-grid" />

      {/* 3. High-Contrast Paper Creases & Folds Shading Layer */}
      <div className="crumpled-creases-layer" />

      {/* 4. Fine Paper Texture Grain & Lighting Overlay */}
      <div className="paper-grain-overlay" />
    </div>
  );
};

export default AnimatedBackground;






