import React, { useState } from "react";
import Axios from 'axios';


function NewProject() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    const createNewProject = () => {
        Axios.post('/uploadnewproject', {
         title: title,
         description: description
        })
        .then(function (response) {
            console.log(response);
            setTitle("");
            setDescription("");
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h2>Create a new project</h2>
            <form>
                <div className="form-group">
                    <label>Title of project</label>
                    <input className="form-control"
                        type="text"
                        placeholder="Title"
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description of the project</label>
                    <input className="form-control"
                        type="text"
                        placeholder="Description"
                        onChange ={event => setDescription(event.target.value)}
                    />
                </div>
                <button className="btn btn-primary" onClick={e => createNewProject()}>Create Project</button>
            </form>
        </div>
    )
}

export default NewProject;
