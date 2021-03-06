import React, { useState } from "react";
import Axios from 'axios';


function NewProject() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    const createNewProject = (e) => {
        e.preventDefault();
        Axios.post('/uploadnewproject', {
         title: title,
         description: description
        })
        .then(function (response) {
            console.log(response);
            setTitle("");
            setDescription("");
            document.getElementById('tit').value = "";
            document.getelementById('des').value = "";
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h2>Create a new project</h2>
            <div>
                <div className="form-group">
                    <label>Title of project</label>
                    <input className="form-control"
                        id="tit"
                        type="text"
                        placeholder="Title"
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description of the project</label>
                    <input className="form-control"
                        id="des"
                        type="text"
                        placeholder="Description"
                        onChange ={event => setDescription(event.target.value)}
                    />
                </div>
                <button className="btn btn-primary" type="button" onClick={e => createNewProject(e)}>Create Project</button>
            </div>
        </div>
    )
}

export default NewProject;
