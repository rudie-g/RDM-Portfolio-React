
function ProjectList(props) {
    const mappedProjData = props.projectData.map(project => {
        return <div className='project' key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink}>Deployed Project</a>
            <a href={project.githubLink}>Github Link</a>
        </div>
    })
    return (
        <div>
            <h1>Projects:</h1>
            <div>
                {mappedProjData}
            </div>
        </div>
    )
}

export default ProjectList