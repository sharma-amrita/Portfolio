import React, { useEffect, useRef } from 'react';
import pdf from './Resume_download_pdf/AmritaSharma.pdf';
import hero from './Doc/hero.json';
import Typed from 'typed.js';


const Home = () => {
  const typedRef = useRef( null)
  useEffect(()=> {
   const options ={
    strings :["Welcome to my Profile","I'm Amrita Sharma"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
   }

   const typed = new Typed(typedRef.current, options)
    return() => {
      typed.destroy();
    }
  
  },[])
  return (
    <>
    <div className="container home" id='home'>
      <div className="left"
      data-aos = "fade-right"
      data-aos-duration = "1000"
      >
         <h3 ref={typedRef}>hello</h3>
          <a href={pdf} download='Amrita_Resume.pdf' className="btn btn-outline-warning my-4">Download Resume</a>
      </div>

      <div className="right">
        <div className="img" 
        data-aos = "fade-left"
        data-aos-duration = "1000"
        >
        < img src={`/assets/${hero.imgSrc}`} alt="Profile"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
