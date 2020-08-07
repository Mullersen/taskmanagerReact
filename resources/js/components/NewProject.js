import React, { useState } from "react";
import Axios from 'axios';


function NewProject() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const createNewproject = () => {
        Axios.post('/uploadnewproject', {
         title: this.state.title,
         description: this.state.description
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h2>Create a new project</h2>
            <label>Title of the new project</label>
            <input
                type="text"
                placeholder="Title"
                onChange={event => setTitle(event.target.value)}
            />
            <label>Description of the project</label>
            <input
                type="text"
                placeholder="Description"
                onChange ={event => setDescription(event.target.value)}
            />
            <button onClick={e => createNewProject()}>Create Project</button>
        </div>
    )
}

export default NewProject;
