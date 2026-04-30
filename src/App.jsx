// src/App.jsx

import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Education from './components/Education';
import Profile from './components/Profile';
import Project from './components/Project';
import AnimatedBackground from './components/Background';
import Preloader from './components/Preloader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen text-white">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <Profile />
          <Education />
          <Project />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;