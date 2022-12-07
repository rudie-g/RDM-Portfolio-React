import React from 'react';
import About from './components/About';
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
