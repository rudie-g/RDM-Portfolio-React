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
        <h4 id='navopen' onClick={handleNavOpen}>| Navbar➜</h4>
        <div className="sidenav" style={{ width: navWidth }}>
          <Link to="/home" onClick={handleNavClose}><img src='images/homepage-icon.png' alt='navbar icon' /><h4>Home</h4></Link>
          <Link to="/projects" onClick={handleNavClose}><img src='images/projects-icon.png' alt='navbar icon' /><h4>Projects</h4></Link>
          <Link to="/contact" onClick={handleNavClose}><img src='images/contact-icon.png' alt='navbar icon' /><h4>Contact</h4></Link>
          <p id='navclose' onClick={handleNavClose}>✖</p>
          <p className="theX">close</p>
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
