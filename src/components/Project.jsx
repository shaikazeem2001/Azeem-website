// src/components/Project.jsx
import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="projects-wrapper">
      <h1>My Projects</h1>
      <div className="all-cards">
        <div className="pro-card">
          <img className="w-img" src="/3dweather.gif" alt="Weather App" />
          <h1>Weather App</h1>
          <h4>A simple yet effective weather app</h4>
          <a href="">Live Site</a>
        </div>

        <div className="pro-card">
          <img className="w-img" src="/burger.gif" alt="Burger App" />
          <h1>Burger Builder</h1>
          <h4>Customize and order your favorite burger</h4>
          <a href="">Live Site</a>
        </div>

        <div className="pro-card">
          <img className="w-img" src="/nike.gif" alt="Nike UI" />
          <h1>Nike UI</h1>
          <h4>A Nike-inspired e-commerce design</h4>
          <a href="">Live Site</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
