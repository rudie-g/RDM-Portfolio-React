import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Navigation from './components/Navigation';



import './App.css';

function App() {
  return (
    <div className="main" id="about">
      <Navigation />
      <About />
    </div>
    
  );
}

export default App;
