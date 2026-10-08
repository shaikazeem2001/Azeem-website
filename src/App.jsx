import React, { useState } from 'react';
import Preloader from './components/Preloader';
import FunkyNavbar from './components/FunkyNavbar';
import FunkyHero from './components/FunkyHero';
import FunkyStory from './components/FunkyStory';
import FunkyRetroSkills from './components/FunkyRetroSkills';
import FunkyGitHubAnalytics from './components/FunkyGitHubAnalytics';
import FunkyProjectArcade from './components/FunkyProjectArcade';
import FunkyContactFooter from './components/FunkyContactFooter';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className="portfolio-app-root">
        <FunkyNavbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />
        
        <main className="portfolio-main-wrapper">
          <FunkyHero soundEnabled={soundEnabled} />
          <FunkyStory />
          <FunkyRetroSkills />
          <FunkyGitHubAnalytics />
          <FunkyProjectArcade />
        </main>

        <FunkyContactFooter />
      </div>
    </>
  );
};

export default App;