import './App.css';
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Header from './components/Header';
import React, { useState } from 'react';
import { projectData } from "./data/projectData";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// TODO useState and setInterval with CSS animations to create a rotating list of strengths/skills/etc. ("UI/UX Design, Backend Development, Full Stack Development, Database/API Management, MERN Stack")

function App() {
  const [navWidth, setNavWidth] = useState('0%');
  const handleNavOpen = () => {
    setNavWidth('25%');
  }
  const handleNavClose = () => {
    setNavWidth('0%')
  }
  
  return (
    <Router>
      <div className="App">
        <h4 id='navopen' onClick={handleNavOpen}>| ➜</h4>
        <div className="sidenav" style={{ width: navWidth }}>
          <Link to="/" onClick={handleNavClose}><div className='navBtnContainer'><img src='images/homepage-icon.png' alt='navbar icon' /><h4 className='navBtn'>About</h4></div></Link>
          <Link to="/projects" onClick={handleNavClose}><div className='navBtnContainer'><img src='images/projects-icon.png' alt='navbar icon' /><h4 className='navBtn'>Projects</h4></div></Link>
          <Link to="/contact" onClick={handleNavClose}><div className='navBtnContainer'><img src='images/contact-icon.png' alt='navbar icon' /><h4 className='navBtn'>Contact</h4></div></Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className='navclose' onClick={handleNavClose}>
            <p className="theX">✖</p>
            <p className="theX">close</p>
          </div>
        </div>
        <Header />
        <Route path="/">
          <About />
        </Route>
        <div className='nativenav'>
          <Link to="/projects"><div className='navBtnContainer'><img src='images/projects-icon.png' alt='navbar icon' /><h4 className='navBtn'>Projects</h4></div></Link>
          <Link to="/contact"><div className='navBtnContainer'><img src='images/contact-icon.png' alt='navbar icon' /><h4 className='navBtn'>Contact</h4></div></Link>
          <Link to="/"><div className='navBtnContainer'><img src='images/homepage-icon.png' alt='navbar icon' /><h4 className='navBtn'>Hide</h4></div></Link>
        </div>
        <Switch>
          <Route path="/projects">
            <ProjectList projectData={projectData} />
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
