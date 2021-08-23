import './App.css';
import ProjectList from './components/ProjectList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react';
import { projectData } from "./data/projectData";


function App() {
  const [navWidth, setNavWidth] = useState('0%');
  const handleNavOpen = () => {
    setNavWidth('25%');
  }
  const handleNavClose = () => {
    setNavWidth('0%')
}
useEffect(handleNavClose)
  return (
    <div className="App">
      <button onClick={handleNavOpen}>Navbar</button>
      <Navbar handleNavClose={handleNavClose} width={navWidth} />
      <ProjectList projectData={projectData} />
      <Footer />
    </div>
  );
}

export default App;
