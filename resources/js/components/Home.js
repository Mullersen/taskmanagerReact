import React, { useState, useEffect } from "react";
import MyProject from './MyProject.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Axios from 'axios';

function Home(){
    const [projects, setProjects] = useState();
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    let { path } = useRouteMatch();
    let {slug} = useParams();

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
                        <Link to={'/'+ project.title}>
                            <div className="card" key={index}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <Switch>
                    <Route exact path={path}>
                        {/* if the exact path is "path" then show the content below  */}
                        <h3>Click on a project to show the tasks in it</h3>
                    </Route>
                    <Route path={'/' +project.title}>
                        <MyProject />
                    </Route>
                </Switch>

            </div>
        );
    }


}

export default Home;

