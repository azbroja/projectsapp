import React, { useState } from 'react'
import axios from 'axios';

export const AddProject = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const token = localStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
  
    const newProject = {
        title: title,
        description: description
    };

    const submit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:8088/api/projects', newProject, {withCredentials: true})
    }
   
    return (
        <div>
             <form onSubmit={submit}>
                <h1 className=""> Add a project </h1>

                <input type="text" className="" placeholder="Please write a title" required onChange={e => setTitle(e.target.value)}
                />

                        <input type="text" className="" placeholder="Please some text" required onChange={e => setDescription(e.target.value)}
                />      
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    )
}



export default AddProject;
