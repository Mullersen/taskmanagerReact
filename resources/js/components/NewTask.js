import React, {useState} from 'react';
import Axios from 'axios';

function NewTask(props){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const saveNewTask = () => {
        Axios.post('/uploadnewtask', {
            taskTitle: title,
            taskDescription: description,
            project_id: this.props.project
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
        <form className="hidden">
                <div className="form-group">
                    <label>Title of task</label>
                    <input type="text" className="form-control" placeholder="Title"  onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Description of task</label>
                    <input type="text" className="form-control" placeholder="description"  onChange={event => setDescription(event.target.value)}/>
                </div>
                <button className="btn btn-primary" onClick={e => saveNewTask()}>Save task</button>
        </form>
    );
}

export default NewTask;