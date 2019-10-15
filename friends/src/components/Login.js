import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { Redirect } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({})
    const updateUser = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const login = (e) =>{
        e.preventDefault()
        axiosWithAuth()
      .post('/api/login', user)
      .then(res => {
        console.log("this.props.history.push('/friends');")
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err.response));
    }


    if (localStorage.getItem("token")) {
        return <Redirect to="Friends" />;
    }
    return (
        <form onSubmit={login}>
            <input name='username' type='text' placeholder='username' onChange={updateUser}></input>
            <input name='password' type='password' placeholder='password' onChange={updateUser}></input>
            <button>Join!</button>
        </form>
    );
};

export default Login;