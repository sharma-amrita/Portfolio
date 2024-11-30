import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="container nav_bar"
        data-aos = "fade-down"
        data-aos-duration = "1000"
      >
        <div className="left nav_item">
        <span style={{color:'white'}}><h4>PORTFOLIO</h4></span>
        </div>
        <div className="right">
            <a href="#home" className="nav_item">Home</a>
            <a href="#internship" className="nav_item">Intership</a>
            <a href="#skills" className="nav_item">Skills</a>
            <a href="#projects" className="nav_item">Project</a>
            <a href="#certificates" className="nav_item">Ceritificate</a>
            <a href="#contact" className="nav_item">Contact</a>

        </div>


      </div>
    </div>
  )
}

export default Navbar;
