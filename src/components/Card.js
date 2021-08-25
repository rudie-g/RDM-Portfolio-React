import React from 'react'

function Card(props) {
    if (props.projectData) {
        return (
            <div className="projectCard">
                <h3>{props.projectData.name}</h3>
                <img src="" alt={props.projectData.name} />
                <p>{props.projectData.description}</p>
                <a href={props.projectData.deployedLink}>Deployed Project</a>
                <a href={props.projectData.githubLink}>Github Link</a>
            </div>
        )
    } else {
        return <h3>Card!</h3>
    }
}

export default Card