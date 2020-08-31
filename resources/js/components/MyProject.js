import React, {useState, useEffect} from 'react';
import {
    useParams,
  } from "react-router-dom";
import Axios from 'axios';
import moment from 'moment';
import NewTask from './NewTask.js'

moment().format();

function MyProject(){
    const [project, setProject] = useState();
    const [count, setCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showCreateTask, setShowCreateTask] = useState(false);
    let {projectTitle} = useParams();

    useEffect(() => {
        console.log(projectTitle);
        Axios.post('/getproject', {
            title: projectTitle,
        })
           .then(function (response) {
               console.log(response);
               setProject(response.data.project[0]);
               setIsLoaded(true);
             })
             .catch(function (error) {
               console.log(error);
             });
    }, [count]);


    const renderProjectInfo= () => {
        if(isLoaded == true){
            return(
            <div>
                <p>Created:{moment(project.created_at).fromNow()}</p>
                <ul>
                    {project.tasks.map((task, index) =>(
                        <div className="card">
                            <li key={index}>{task.title}</li>
                        </div>
                    ))}
                </ul>
            </div>
            )
            }
    }

    return(
        <div>
            <h2>{projectTitle}</h2>
            <h3>A project!</h3>
            {renderProjectInfo()}
            <h2>Create task for project</h2>
            <button className="btn btn-light" id="createTask" onClick= {e => setShowCreateTask(true)}>Create task</button>
            {showCreateTask == true &&
            <NewTask project={projectTitle}/>
            }
        </div>
    );
}

export default MyProject;
