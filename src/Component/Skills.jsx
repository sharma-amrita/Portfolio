import React from 'react';
import skillsData from './Doc/skills.json'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img 
              src={require(`./path-to-images/${skill.imageSrc}`)} 
              alt={`${skill.title} logo`} 
              className="skill-image" 
            />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;