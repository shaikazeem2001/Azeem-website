// src/App.jsx

import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import './App.css'
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnimatedBackground from './components/Background';
import Preloader from './components/Preloader';

// Lazy load below-the-fold heavy components
const Profile = lazy(() => import('./components/Profile'));
const Education = lazy(() => import('./components/Education'));
const Project = lazy(() => import('./components/Project'));

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
          <Suspense fallback={<div className="loading-fallback">Loading section...</div>}>
            <Profile />
            <Education />
            <Project />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;