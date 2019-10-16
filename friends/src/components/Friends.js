import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { AddFriend } from './AddFriend';
import styled from 'styled-components'

const FriendSection = styled.div`
display:flex;
flex-wrap: wrap;
`

const FriendCard = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
margin: 2% auto;
width: 30%;
`
const ButtonWrap = styled.div`
display:flex;
justify-content: space-between;
button{
    margin: 50px;
}
`

const Friends = (props) => {
    const [updated, setUpdate] = useState(false)
    const [friend, setFriend] = useState({})
    const [friends, setFriends] = useState([])

    
    useEffect(() => {
        // fetch data from the server
        // the data is protected behind a token
        // so our request needs to include an `Authorization: token` header
        // TODO: Fetch this data - `/api/data` - and add the array of gas prices to state
        axiosWithAuth()
          .get('/api/friends')
          .then(res => setFriends(res.data))
          .catch(err => console.log(err.response));},[updated])
        

    
      const delFriend = (friend)=>{
        //   e.preventDefault()
           
           axiosWithAuth()
          .delete(`/api/friends/${friend.id}`)
          .then(res => {
            setUpdate(true)
        })
          .catch(err => console.log(err.response));
          
          setFriends(friends.filter(Friend=>friend.id!==Friend.id))
           
      }

      
    return(
        <div>
            <AddFriend setFriend={setFriend} friend={friend}/>
            <FriendSection>
            {friends.map(friend=>(
                <FriendCard key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                    <ButtonWrap>
                        <button>Edit</button>
                        <button onClick={(e)=>delFriend(friend)}>Delete</button>
                    </ButtonWrap>
                </FriendCard>
                    )
            )}
            </FriendSection>
        </div>
    )
}


export default Friends;