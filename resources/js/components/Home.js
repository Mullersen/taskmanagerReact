import React, { useState, useEffect } from "react";
import Axios from 'axios';

function Home(){
    const [projects, setProjects] = useState();
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

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
                        <div className="card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }


}

export default Home;

