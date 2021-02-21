import Login from './components/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import React, {useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './components/Sidebar';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Item from './components/Item';

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };



  useEffect(() => {
      (
      async () => {
          const {data} = await axios.get('http://localhost:8088/api/user', config, {withCredentials: true});
          setUser(data);
      })();

  }, []);

  return (
    <div className="App">
      {!user ? <Login /> :
      <>
          
      <BrowserRouter> 
      <Header user={user} />
        <Sidebar user={user} />
        <Switch>
          <Route path={'/dashboard'} component={() => <Dashboard user={user} />} exact/>
          {token ? '' : <Route path={'/login'} component={Login} exact/>}
          <Route path={'/add-project'} component={AddProject} exact/>
          <Route path={'/all-projects'} component={Projects} exact/>
          
          <Route path={'/projects/:id'} component={Item} exact/>
        </Switch>
        </BrowserRouter> 

      </>
    }
    </div>
  );
}

export default App;
