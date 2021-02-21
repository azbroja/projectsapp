import React, {useState, useEffect} from 'react';
import axios from 'axios';



    
export const Item = () => {
    const [project, setProject] = useState('');
    const url = 'http://localhost:8088/api'+window.location.pathname;
    const url_tasks = 'http://localhost:8088/api/tasks/'+project["id"];
console.log(project.id);

    useEffect(() => {
        (
        async () => {
            const {data} = await axios.get(url, {withCredentials: true});
            setProject(data);
        })();
        (
            async () => {
                const response = await axios.get(url_tasks, {withCredentials: true});
                console.log(response.data);
            })();
       
  
    }, []);

    useEffect(() => {
        (
        async () => {
            const response = await axios.get(url_tasks, {withCredentials: true});
            console.log(response.data);
        })();

       
  
    }, []);

    return (

        <div>
            <h1>  Project {project.title}   </h1>   
            <p>Projects tasks: </p>


        </div>
    )
}



export default Item
