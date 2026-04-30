import React from 'react';
import './SkillCubes.css';

const skills = [
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'LaTeX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', invert: true },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg', invert: true },
];

const SkillCubes = () => {
  return (
    <div className="skills-grid-3d">
      {skills.map((skill, index) => {
        // Create variations in animation speed and direction
        const duration = 12 + (index % 5) * 2;
        const direction = index % 2 === 0 ? 'normal' : 'reverse';
        
        return (
          <div className="skill-item" key={skill.name}>
            <div className="scene">
              <div 
                className="cube" 
                style={{ 
                  animationDuration: `${duration}s`,
                  animationDirection: direction
                }}
              >
                {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
                  <div key={face} className={`cube__face cube__face--${face}`}>
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={skill.invert ? { filter: 'invert(1)' } : {}}
                    />
                  </div>
                ))}
              </div>
            </div>
            <span className="mono">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCubes;
