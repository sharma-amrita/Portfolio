import React, { useEffect, useState } from 'react';
// import './App.css';

// Import the JSON data
import intership from './Doc/intership.json'

function Intership() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Set the data into state when the component is mounted
    setExperiences(intership);
  }, []);

  return (
    <div className="App">
      <h4 className='heading'>INTERNSHIP EXPERIENCE</h4>
      <div className='container1'>
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <h4>{experience.role} at {experience.organisation}</h4>
            
            <p>
                  {experience.startDate && experience.endDate ? (
                    <span style={{ color: 'rgb(0,250,10)' }}>
                      {experience.startDate} - {experience.endDate} |
                    </span>
                  ) : null}
                  {experience.location && (
                    <span style={{ color: 'yellow' }}>
                      {experience.location}
                    </span>
                  )}
            </p>
            
           
              {experience.experiences.map((exp, index) => (
               <p style={{color:'yellow'}}> <strong key={index}>{exp}</strong> </p> 
              ))}
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intership;

