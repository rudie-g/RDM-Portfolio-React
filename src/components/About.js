import React from 'react'

function About() {
    return (
        <div className='about'>
            <div className="aboutHead">
                <h3>About</h3>
                <p>I'm a web developer proficient in <span>Javascript</span>, specializing in <span>Backend Development</span> but with a passion for <span>UX/UI</span>. I excel at <span>Creative Problem Solving</span> and challenging work environments. I am perfectly capable of, and comfortable with, <span>Full Stack Development</span>, particularly in the <span>MERN Stack</span>, but I am always looking to expand my toolbox with new languages and technologies!</p>
            </div>
            <div className='aboutContainer'>
                <div className='aboutCard'>
                    <h4>Strengths</h4>
                
                        <li>Very Quick Learner</li>
                        <li>Creative Problem Solver</li>
                        <li>Teamwork and Leadership</li>
                    
                </div>
                <div className='aboutCard'>
                    <h4>Interests</h4>
                
                        <li>Efficient Data Storage</li>
                        <li>Cloud-Based Computing</li>
                        <li>Mobile-Focused Development</li>
                    
                </div>
                <div className='aboutCard'>
                    <h4>Hobbies</h4>
                
                        <li>Songwriting</li>
                        <li>Poetry</li>
                        <li>Combat Sports</li>
                    
                </div>
            </div>
        </div>
    )
}

export default About