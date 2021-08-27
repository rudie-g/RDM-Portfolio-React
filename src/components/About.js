import React from 'react'

function About() {
    return (
        <div className='about'>
            <h3>About:</h3>
            <p></p>
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
                        <li>Writing Poetry</li>
                        <li>Combat Sports</li>
                    
                </div>
            </div>
        </div>
    )
}

export default About