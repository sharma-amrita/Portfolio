// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Intership from './Component/Intership';
// import Skills from './Component/Skills';
import Project from './Component/Projects';
import Projects from './Component/Projects';

function App() {
  return (
    <>
   <Navbar/>
   <Home />
   <Intership/>
    <Projects/>
    </>  
    )
}

export default App;
