import React, { useState, useEffect } from "react";
import MyProject from './MyProject.js';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Axios from 'axios';

function Projects(){
    const [projects, setProjects] = useState();
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    let { path, url } = useRouteMatch();

    const cardStyle = {
        maxWidth: 18 +'rem',
        minWidth: 15 +'rem',
        minHeight: 10 +'rem',
    };

    useEffect(() => {
        Axios.get('/getprojects')
           .then(function (response) {
               console.log(response);
               setProjects(response.data.projects);
               setIsLoaded(true);
             })
             .catch(function (error) {
               console.log(error);
             });
    }, [count]);

    if(isLoaded == false){
        return(
        <div className="container">
            <h2>Projects</h2>
            <p>You have no projects yet. Click 'New Project' to start one!</p>
        </div>
        )
    }

    if(isLoaded == true){
        return(
            <div className="container">
                <h2>Projects</h2>
                <div className="row">
                    {projects.map((project, index) =>(
                        <div className="col" key={index}>
                            <Link to={`${url}/project/${project.title}`} >
                                <div className="card text-white bg-primary mb-3" style={cardStyle}>
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Switch>
                    <Route exact path={path}>
                        <h3>Click on project to see the related tasks</h3>
                    </Route>
                    <Route path={`${path}/project/:projectTitle`}>
                        <MyProject/>
                    </Route>
                </Switch>
             </div>
        );
    }


}

export default Projects;

