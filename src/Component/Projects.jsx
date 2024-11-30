import React from "react";
import projects from "./Doc/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h4>PROJECT</h4>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((Doc) => (
            <>
              <div
                key={projects.id}
                className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3"
              >
                <div
                  className="card bg-dark text-light"
                  style={{ width: "18rem", border:'2px solid yellow', boxShadow:'5px 5px 10px 6px rgba(101,175,10,0.5)'}}
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                  <img src={Doc.imageSrc} className="card-img-top" alt=".." 
                  style={
                    {
                      width:'250px',
                      height:'200px',
                      border:'2px solid yellow',
                      borderRadius:'10px'
                    }
                  }/>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{Doc.title}</h5>
                    <p className="card-text">{Doc.description}</p>
                    <a href={Doc.source} className="btn btn-primary" target="_blank">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
