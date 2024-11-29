import React from 'react'
import projects from './Doc/projects.json';


const Projects = () => {
  return (
   <>
         <div classNameName='container projects'>
              <h4>PROJECT</h4>
             <div classNameName="row">
                {projects.map((Doc)=>(
                    <>
                    <div key={Doc.id}></div>
                    <div className="card" style={{width:'18rem'}}>
                                <img src="" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text"> the card's content.</p>
                                     <a href="#" className="btn btn-primary">Go somewhere</a>
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
