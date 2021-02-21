import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Task from './Task';



    
export const Item = () => {
    const [project, setProject] = useState('');
    const url = 'http://localhost:8088/api'+window.location.pathname;

     

    useEffect(() => {
        (
        async () => {
            const {data} = await axios.get(url, {withCredentials: true});
            setProject(data);
        })();

       
  
    }, []);

    return (

        <div>
            <h1>  Project {project.title}   </h1>   
            <p>Projects tasks: </p>

            <Task id={project.id} />

        </div>
    )
}



export default Item;
