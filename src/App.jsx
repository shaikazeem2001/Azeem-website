// src/App.jsx

// import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Education from './components/Education';
import Profile from './components/Profile';
import Project from './components/Project';
import AnimatedBackground from './components/Background';

const App = () => {

  
  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <div className="page">
      <Education/>
      <Profile/>
      <Project/>
      </div>
     
      <Footer />
      
    </div>
   
  );
};

export default App;