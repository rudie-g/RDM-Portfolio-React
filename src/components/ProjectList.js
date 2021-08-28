import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Card from './Card'

function ProjectList(props) {
    const mappedProjData = props.projectData.map(project => {
        return (
            <div className='projectListItem'>
                <Link to={`/${project.id}`}><span className={project.name}>{project.name}</span></Link>
            </div>
        )
    })
    return (
        <Router>
            <div className="projectList">
                {mappedProjData}
            </div>
            <div id='projectDisplay'>
            <Switch>
                <Route path="/1">
                    <Card projectData={props.projectData[0]} />
                </Route>
                <Route path="/2">
                    <Card projectData={props.projectData[1]} />
                </Route>
                <Route path="/3">
                    <Card projectData={props.projectData[2]} />
                </Route>
            </Switch>
            </div>
        </Router>
    )
}

export default ProjectList