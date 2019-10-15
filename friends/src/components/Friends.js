import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { AddFriend } from './AddFriend';

const Friends = (props) => {
    const [friends, setFriends] = useState([])
    console.log(props)
    const getData = () => {
        // fetch data from the server
        // the data is protected behind a token
        // so our request needs to include an `Authorization: token` header
        // TODO: Fetch this data - `/api/data` - and add the array of gas prices to state
        axiosWithAuth()
          .get('/api/friends')
          .then(res => setFriends(...friends,res.data))
          .catch(err => console.log(err.response));}
    useEffect(()=>{
        if(friends.length===0){
            console.log('hello')
            getData()
      } },[])
     console.log(friends)
    return(
        <div>
            <AddFriend/>
            {friends.map(friend=>(
                <div>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
                    )
            )}
        </div>
    )
}


export default Friends;