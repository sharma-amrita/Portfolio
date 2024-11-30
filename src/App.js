
import './App.css';
import React, { useEffect } from 'react'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Intership from './Component/Internship';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Certificate from './Component/certificate';
import Contact from './Component/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';


const App= () =>{
  useEffect(()=>{
    Aos.init();

  },[]) 
  {
  return (
    <>
   <Navbar/>
   <Home />
   <Internship/>
   <Skills/>
   <Projects/>
   <Certificate/>
   <Contact/>

    </>  
    )
}
}
export default App;
