import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const AddFriend = (props)=>{
    const [friend, setFriend] = useState({})
    const updateFriend = (e) =>{
        setFriend({
            ...friend,
            [e.target.name]:e.target.value
        })
    }
    const addFriend = () => {
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res=>console.log(res))
        .error(err=>console.log(err.response))
    }

    return (
        <form onSubmit={addFriend}>
            <input name='name' type='text' placeholder='name' onChange={updateFriend}></input>
            <input name='age' type='text' placeholder='age' onChange={updateFriend}></input>
            <input name='email' type='email' placeholder='email' onChange={updateFriend}></input>
            <button>Join!</button>
        </form>
    );
};