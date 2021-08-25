import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Card from './Card'

function ProjectList(props) {
    const mappedProjData = props.projectData.map(project => {
        return (
            <Link to={`/${project.id}`}>{project.name}</Link>
        )
    })
    return (
        <Router>
            {mappedProjData}
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
        </Router>
    )
}

export default ProjectList