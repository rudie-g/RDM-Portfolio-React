import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBg from "particles-bg";
import '../App.css'
import Projects from './Projects';
import Footer from './Footer';

const styles = {
  margins: {
    marginTop: '100px',
    height: '400px'
  }
}
const About = () => {
  return (
    <React.Fragment>


      <div className="container " style={styles.margins}>
        <ParticlesBg type="cobweb" color="#ffbb00" bg={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          width: "100%",
          height: 1200
        }} />
        <div className="row ">
          <div className="col-md-8 col-sm-12 order-sm-first order-last">
            <div className='shadow' id='theSelf'>
                <img src='./images/theSelf2.jpg' className='bottom' alt='headshot' />
                <img src='./images/theSelf3.jpg' className='top' alt='headshot' />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 leftJust">
          <p>I'm a web developer proficient in <span>Javascript</span>, specializing in <span>Backend Development</span> but with a passion for <span>UX/UI</span>. </p>
            <p> I excel at <span>Creative Problem Solving</span> and challenging work environments. I am perfectly capable of, and comfortable with, <span>Full Stack Development</span>, particularly in the <span>MERN Stack</span>, but I am always looking to expand my toolbox with new languages and technologies! </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-4" id="skillsText">
            <div className='myNames'>
                <h1 id='rauoldmoore'>Rauol D Moore</h1>
                <h3 id='rudieg'>Rudie G</h3>
            </div>
            
          </div>
          <div className="col-sm-8  order-last">
            <div className="wrap-circles">

              <div className="circle">
                <div className="inner">HTML & CSS</div>
              </div>
              <div className="circle">
                <div className="inner">JavaScript</div>
              </div>
              <div className="circle">
                <div className="inner">Express JS</div>
              </div>
              <div className="circle">
                <div className="inner">Node JS</div>
              </div>
              <div className="circle">
                <div className="inner">MySQL</div>
              </div>
              <div className="circle">
                <div className="inner">UX/UI Design</div>
              </div>
              <div className="circle">
                <div className="inner">MongoDB</div>
              </div>
              <div className="circle">
                <div className="inner">GraphQL</div>
              </div>
              <div className="circle">
                <div className="inner">React</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Footer />
    </React.Fragment>
  );
};

export default About;