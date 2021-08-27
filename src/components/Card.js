import React from 'react'

function Card(props) {
    if (!props.projectData) {
        return (
            <div className='generalCard'>
                <h3>Card!</h3>
            </div>
        )
    } else {
        return (
            <div className="projectCard">
                <img src={props.projectData.imgSrc} alt={props.projectData.name} />
                <h3 className={props.projectData.name}>{props.projectData.name}</h3>
                <p>{props.projectData.description}</p>
                <a href={props.projectData.deployedLink}>Deployed Project</a>
                <a href={props.projectData.githubLink}>Github Link</a>
            </div>
        )
    }
}

export default Card