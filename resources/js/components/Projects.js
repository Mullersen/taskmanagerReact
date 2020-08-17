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
        <div>
            <h2>Projects</h2>
            <p>You have no projects yet. Click 'New Project' to start one!</p>
        </div>
        )
    }

    if(isLoaded == true){
        return(
            <div>
                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project, index) =>(
                        <Link to={`${url}/project/${project.title}`} key={index}>
                            <div className="card" >
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <Switch>
                    <Route exact path={path}>
                    <h3>Please select a project</h3>
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

