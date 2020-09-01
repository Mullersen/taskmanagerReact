import React, {useState} from 'react';
import Axios from 'axios';

function NewTask(props){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [task, setTask] = useState();

    const saveNewTask = () => {
        Axios.post('/task/uploadNewTask', {
            title: title,
            description: description,
            project: props.project
           })
           .then(function (response) {
               console.log(response);
               setTitle("");
               setDescription("");
               document.getElementById('tit').value = "";
               document.getelementById('des').value = "";
               setTask(response.data.response);
             })
             .catch(function (error) {
               console.log(error);
             });
    }
    return (
        <div className="hidden">
                <div className="form-group">
                    <label>Title of task</label>
                    <input type="text" id="tit" className="form-control" placeholder="Title"  onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Description of task</label>
                    <input type="text" id="des" className="form-control" placeholder="description"  onChange={event => setDescription(event.target.value)}/>
                </div>
                <button className="btn btn-primary" type="button" onClick={e => saveNewTask()}>Save task</button>
        </div>
    );
}

export default NewTask;
