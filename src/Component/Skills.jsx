import React from 'react';
import skills from './Doc/skills.json';

const Skills = () => {
  return (
    <div className="container skills">
      <h4>SKILLS</h4>
      {skills.map((doc, index) => (
        <div className="items" key={index}> {/* Ensure unique key */}
          <div className="item">
            <img src={`/assets/${doc.imageSrc}`} alt={doc.title} />
          </div>
        </div>
      ))} </div>
  );
};

export default Skills;
