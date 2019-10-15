import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

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
          console.log(res)
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err.response));
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