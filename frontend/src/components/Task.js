import React, {useState, useEffect} from 'react';
import axios from 'axios';



    
export const Task = ({id}) => {
    const [tasks, setTasks] = useState([]);
    const url_tasks = 'http://localhost:8088/api/tasks/'+id;

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(url_tasks, {withCredentials: true});
                setTasks(data);
                console.log(data);
                console.log(tasks);
            })();        
    }, []);



    return (

        <div>
            <h1>  Tasks   </h1>   
            {tasks.map( ( {id, title, description} ) => {
    return <ol><a href={"/tasks/"+id} key={id}>{title} - {description}</a> </ol>
})}

        </div>
    )
}



export default Task;
