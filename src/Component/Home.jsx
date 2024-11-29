import React from 'react'
import pdf from './pdf/AmritaSharma.pdf'
import hero from '../Assets/hero/image.jpg'

const Home = () => {
  return (
    <>
    <div className="container home">
      <div className="left">
         <h1>welcome to my Profile</h1>
          <a href={pdf} download='Amrita_Resume.pdf' className="btn btn-outline-warning">Download Resume</a>
      </div>

      <div className="right">
        <div className="img">
        < img src={`/assets/${hero.imgSrc}`} alt="Photo"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
