import React from 'react';
import skills from './Doc/skills.json';

const Skills = () => {
  return (
    <div className="container skills" id='skills'>
      <h4 className='topic'>SKILLS</h4>
      <div className="items">
      {skills.map((Doc) =>(
        <>
          
            <div className="item" key={Doc.id}
               data-aos = "flip-right"
              data-aos-duration = "1000"
            >
              < img src={Doc.imageSrc} alt=""/>
              <h6>{Doc.title}</h6>
            </div>                 
        </>
          ))}
        </div>     
    </div>
  );
};

export default Skills;
