import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute path="/friends" component={Friends} />
          <Route path='/' exact component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
