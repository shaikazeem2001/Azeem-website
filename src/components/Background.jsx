import React from 'react';
import './Background.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="gradient-layer"></div>
      <div className="particles-layer"></div>
      <div className="glow-layer"></div>
    </div>
  );
};

export default AnimatedBackground;
