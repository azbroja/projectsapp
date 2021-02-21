import React, {useState, useHistory} from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const storedJwt = localStorage.getItem('token');

    const submit = async (e) => {
        e.preventDefault();

        const {data} = await axios.post('http://localhost:8088/api/sanctum/token', {
            email, 
            password,
            device_name: "pc"
        }, {withCredentials: true})

        localStorage.setItem('token', data);
        setRedirect(true);

    }

    if (redirect) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <form onSubmit={submit}>
                <h1 className=""> Please Log in </h1>

                <input type="email" className="" placeholder="Please write an email" required onChange={e => setEmail(e.target.value)}
                />

                        <input type="password" className="" placeholder="Please write password" required onChange={e => setPassword(e.target.value)}
                />      
                <button className="" type="submit">Submit</button>
            </form>
        </div>
    )
}



export default Login;
