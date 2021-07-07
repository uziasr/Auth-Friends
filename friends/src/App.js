import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {
  const [friends, setFriends] = useState([])
  return (
    <Router>
      <div className="App">
        {/* <div>
          <Link to='/login'>login</Link>
          <Link to='/friends'>friends</Link>          
        </div> */}
        <Switch>
        <PrivateRoute path="/friends" component={Friends} friends={friends} setFriends={setFriends} />
          <Route path='/' component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
