import './App.css';
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import React, { useState } from 'react';
import { projectData } from "./data/projectData";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



function App() {
  const [navWidth, setNavWidth] = useState('0%');
  const handleNavOpen = (e) => {
    setNavWidth('25%');
  }
  const handleNavClose = (e) => {
    setNavWidth('0%')
  }
  return (
    <Router>
      <div className="App">
        <button onClick={handleNavOpen}>Navbar</button>
        <div className="sidenav" style={{ width: navWidth }}>
          <Link to="/home">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={handleNavClose}>X</button>
        </div>
        <Switch>
          <Route path="/projects">
            <ProjectList projectData={projectData} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
