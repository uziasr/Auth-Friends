import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

export const AddFriend = (props)=>{
    const [friend, setFriend] = useState({})
    const [friendAdded, setFriendAdded] = useState(false)
    const [friends, setFriends] = useState([])
    const updateFriend = (e) =>{
        setFriend({
            ...friend,
            [e.target.name]:e.target.value
        })
    }
    const addFriend = (e) => {
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res=>{
            console.log('addded',res)
            setFriendAdded(!friendAdded)
            setFriends([...friends,friend])
        })
        .catch(err=>console.log('error',err.response))
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