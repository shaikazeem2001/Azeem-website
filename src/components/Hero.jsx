import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left side: Content */}
      <div className="hero-content">
        <p className="p">Software Engineer</p>
        <h1 className="name">
          Hello I'm <br />
        </h1>
        <h1 className="name2">Azeem Shaik</h1>

        <div className="icons">
          <button className="resume-btn">
            Resume
            <img src="/download.png" alt="Download" />
          </button>
          <a href="https://www.linkedin.com/in/shaik-azeem-817886233/">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/shaikazeem2001">
            <img src="/github.png" alt="github" />
          </a>
        </div>

        <div className="metrics">
          <div className="metric-wrapper">
            <h1 className="main-metric">24</h1>
            <p className="sub-metric">age</p>
          </div>
          <div className="metric-wrapper">
            <h1 className="main-metric">10</h1>
            <p className="sub-metric">
              projects worked <br />
              on
            </p>
          </div>
          <div className="metric-wrapper">
            <h1 className="main-metric">5</h1>
            <p className="sub-metric">projects deployed</p>
          </div>
        </div>
      </div>

      {/* Right side: Avatar */}
      <div className="avatar-wrapper">
        <div className="glow-ring"></div>
        <div className="avatar-animation">
        <DotLottieReact
      src="https://lottie.host/f480a02b-7097-450e-9744-21870717c86f/DJw4XwGLKF.lottie"
      loop
      autoplay
    />
        </div>
      </div>
    </div>
  );
};

export default Hero;
