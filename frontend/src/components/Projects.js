import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Projects = () => {
   const [projects, setProjects] = useState([]);


   useEffect(() => {
        (
        async () => {
            const {data} = await axios.get('http://localhost:8088/api/projects', {withCredentials: true});
            setProjects(data);
        })();
  
    }, []);

    
   
    return (
        <div>
            {projects.map( ( {id, title, description} ) => {
    return <ol key={id}><a href={"/projects/"+id} key={id}>{title} - {description}</a> </ol>
})}
        </div>
    )
}



export default Projects;
