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
        <h4 id='navopen' onClick={handleNavOpen}>| Links ➜</h4>
        <div className="sidenav" style={{ width: navWidth }}>
          <div className='navBtnContainer' onClick={handleNavClose}><a href='https://www.github.com/rudie-g'><img src='images/github-icon.png' alt='navbar icon' /><h4 className='navBtn'>Github</h4></a></div>
          <div className='navBtnContainer' onClick={handleNavClose}><a href='https://www.linkedin.com/in/rauol-moore-22144620a/'><img src='images/in-Blue.png' alt='navbar icon' /><h4 className='navBtn'>LinkedIn</h4></a></div>
          <div className='navBtnContainer' onClick={handleNavClose}><a href='https://docs.google.com/document/d/1EeSvIrYfqTyJJRiHwth2N5kR4Y0ahdW3BiKQ5R9xOZQ/edit?usp=sharing'><img src='images/homepage-icon.png' alt='navbar icon' /><h4 className='navBtn'>View Resume</h4></a></div>
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
          <Link to="/contact"><div className='navBtnContainer'><img src='images/contact-icon.png' alt='navbar icon' /></div><h4 className='navBtn' href='#contactContainer'>Click to Contact</h4></Link>
        </div>
        <Switch>
          <Route path="/contact">
            <div id='contactContainer'>
              <Contact />
            </div>
          </Route>
        </Switch>
            <div id='projectListContainer'>
              <h2>Some of my work</h2>
              <ProjectList projectData={projectData} />
            </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
