import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";



    
export const Task = ({id}) => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('http://localhost:8088/api/tasks/'+id, {withCredentials: true});
                setTasks(data);
            })();        
    }, [id, redirect]);

    const newTask = {
        title: title,
        description: description,
        project_id: id
    };

    const submit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:8088/api/tasks', newTask, {withCredentials: true})
        setRedirect(true);

    }

   
    
    return (

        <div>
            <div>
                
             <form onSubmit={submit}>
                <h1 className=""> Add Taks </h1>

                <input type="text" className="" placeholder="Please write a title" required onChange={e => setTitle(e.target.value)}
                />

                        <input type="text" className="" placeholder="Please some text" required onChange={e => setDescription(e.target.value)}
                />      
                <button className="" type="submit">Add Task</button>
            </form>
        </div>
            
            <h1>  Tasks List   </h1>
            {tasks.map( ( {id, title, description} ) => {
    return <ol key={id}><a href={"/tasks/"+id} key={id}>{title} - {description}</a> </ol>
})}

        </div>
    )
}



export default Task;
