import React, { useEffect, useRef } from 'react';
import pdf from './Resume_download_pdf/AmritaSharma.pdf';
import hero from './Doc/hero.json';
import Typed from 'typed.js';
import { PiFileRsThin } from 'react-icons/pi';
import { ImLoop } from 'react-icons/im';

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
      
    }
  
  },[])
  return (
    <>
    <div className="container home">
      <div className="left">
         <h3 ref={typedRef}></h3>
          <a href={"pdf/AmritaSharma"} download='Amrita_Resume.pdf' className="btn btn-outline-warning my-4">Download Resume</a>
      </div>

      <div className="right">
        <div className="img">
        < img src={`/assets/${hero.imgSrc}`} alt="Profile"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;
