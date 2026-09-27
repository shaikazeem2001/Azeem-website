import React, { useState, useEffect } from 'react';
import './Background.css';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x, y });
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bw-liquid-background">
      {/* 1. Black to White Monochrome Gradient Layer */}
      <div className="bw-gradient-base" />

      {/* 2. Liquid Lava Pattern Background Texture Layer */}
      <div 
        className="bw-liquid-pattern-layer"
        style={{
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12 + scrollY * -0.05}px)`
        }}
      >
        <img src="/bg-assets/liquid_pattern_clean.png" alt="" className="liquid-pattern-img" />
      </div>

      {/* 3. Liquid Orb Asset (Floating near top right) */}
      <div 
        className="bw-liquid-orb-container"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 20 + scrollY * 0.08}px) rotate(${scrollY * 0.05}deg)`
        }}
      >
        <img src="/bg-assets/liquid_orb_clean.png" alt="" className="liquid-orb-img" />
      </div>

      {/* 4. Liquid Splash Asset (Floating near middle/bottom left) */}
      <div 
        className="bw-liquid-splash-container"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 18 + scrollY * -0.06}px) rotate(${-15 + scrollY * -0.03}deg)`
        }}
      >
        <img src="/bg-assets/liquid_splash_clean.png" alt="" className="liquid-splash-img" />
      </div>

      {/* 5. Subtle Radial Glow Orbs (Monochrome White & Silver) */}
      <div className="monochrome-glow glow-top" />
      <div className="monochrome-glow glow-bottom" />
    </div>
  );
};

export default AnimatedBackground;



