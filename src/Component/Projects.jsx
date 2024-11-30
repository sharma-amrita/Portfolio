import React from 'react'
import projects from './Doc/projects.json';


const Projects = () => {
  return (
   <>
         <div classNameName='container projects my-3'>
              <h4 >PROJECT</h4>
              <div classNameName="row">
                {projects.map((Doc)=>(
                    <>
                    <div key={projects.id} className="my-4 col-md-4">
                    <div className="card bg-dark text-light" style={{width:'18rem'}}>
                                <img src={Doc.imageSrc} className="card-img-top" alt=".."/>
                                <div className="card-body text-center">
                                <h5 className="card-title">{Doc.title}</h5>
                                <p className="card-text">{Doc.description}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                     </div>
                    </div>
                    </>
                ))}

        </div>
   </div>
   </>
  )
}

export default Projects
