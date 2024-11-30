import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container nav_bar">
        <div className="left nav_item">
        <span style={{color:'white'}}><h4>PORTFOLIO</h4></span>
        </div>
        <div className="right">
            <a href="#" className="nav_item">Home</a>
            <a href="#" className="nav_item">Intership</a>
            <a href="#" className="nav_item">Skills</a>
            <a href="#" className="nav_item">Project</a>
            <a href="#" className="nav_item">Ceritificate</a>
            <a href="#" className="nav_item">Contact</a>

        </div>


      </div>
    </div>
  )
}

export default Navbar;
