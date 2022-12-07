import React from 'react';
import  About  from './About';
import Contact from './Contact'
import Navigation from './Navigation';
import Projects from './Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Header = () =>{
    return(
        
        <Router>
            <Navigation />
            <Routes>
            <Route path="/"  element={<About />}/>
            <Route path="/contact"  element={<Contact />}/>
            </Routes>
        </Router>
    );
};

export default Header;