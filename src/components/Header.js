import React, { useEffect, useState } from "react";

function Header() {
    const skillsArr = ["Javascript", "UX/UI Design", "Backend Development", "Database/API Management", "Full Stack Development", "MERN Stack", "GraphQL", "MongoDB", "MySQL"]
    const [skillIndex, setSkillIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (skillIndex <= 7) {
          setSkillIndex(skillIndex + 1);
            } else {
                setSkillIndex(0)
            }
        }, 5000);
     
        return () => clearInterval(interval)
      }, [skillIndex]);
     
    return (
        <div className='header'>
            <img src='./images/theSelf3.jpg' alt='headshot' id='theSelf' />
            <br />
            <br />
            <div className='myNames'>
                <h1 id='rauoldmoore'>Rauol D Moore</h1>
                <h3 id='rudieg'>Rudie G</h3>
            </div>
            <div className='skillsBorderBox'>
                <div id='skillsContainer'>
                    <p id='skill'>{skillsArr[skillIndex]}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;