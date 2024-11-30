import React from 'react';
import skills from './Doc/skills.json';

const Skills = () => {
  return (
    <div className="container skills">
      <h4>SKILLS</h4>
      {skills.map((Doc) =>(
        <>
          <div className="item" key={Doc.id}>
            <div className="item">
            < img src={skills.imageSrc} alt="Photo_skill"/>
              <h3>{Doc.title}</h3>
            </div>           
          </div>        
        </>
      ))} 
      </div>
  );
};

export default Skills;
