// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Intership from './Component/Intership';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Certificate from './Component/certificate';
import Contact from './Component/Contact'

function App() {
  return (
    <>
   <Navbar/>
   <Home />
   <Intership/>
   <Skills/>
   <Projects/>
   <Certificate/>
   <Contact/>

    </>  
    )
}

export default App;
