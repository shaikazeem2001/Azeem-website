import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
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

const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
  }
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen text-white">
        <AnimatedBackground />
        <Navbar />
        <main className="portfolio-main-container">
          {/* Section 1: Hero */}
          <motion.section
            id="hero"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="portfolio-section-block"
          >
            <Hero />
          </motion.section>

          <div className="section-divider-glow" />

          <Suspense fallback={<div className="loading-fallback">Loading section...</div>}>
            {/* Section 2: About / Profile */}
            <motion.section
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariants}
              className="portfolio-section-block"
            >
              <Profile />
            </motion.section>

            <div className="section-divider-glow" />

            {/* Section 3: Education */}
            <motion.section
              id="education"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={sectionVariants}
              className="portfolio-section-block"
            >
              <Education />
            </motion.section>

            <div className="section-divider-glow" />

            {/* Section 4: Projects */}
            <motion.section
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={sectionVariants}
              className="portfolio-section-block"
            >
              <Project />
            </motion.section>
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;