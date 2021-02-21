import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';



    
export const Task = ({id}) => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
 
    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('http://localhost:8088/api/tasks/'+id, {withCredentials: true});
                setTasks(data);
                console.log(tasks);
            })();        
    }, []);

    const newTask = {
        title: title,
        description: description,
        project_id: id
    };

    const submit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:8088/api/tasks', newTask, {withCredentials: true})
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
            <h1>  Tasks   </h1>
            {tasks != [] ? 'is loading' : tasks.map( ( {id, title, description} ) => {
    return <ol><a href={"/tasks/"+id} key={id}>{title} - {description}</a> </ol>
})}

        </div>
    )
}



export default Task;
