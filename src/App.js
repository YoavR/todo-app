import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Login from './components/Login.js'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const TodoApp1 = () => (
  <div>
    <h2>todo page</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Navbar> </Navbar>
        <Login> </Login>
        <Router>
          <div>
            <ul>
              <li><Link to="/login">Login Link</Link></li>
              <li><Link to="/todo">Todo Link</Link></li>
            </ul>

            <hr/>

            <Route exact path="/login" component={Login}/>
            <Route path="/todo" component={TodoApp1}/>
          </div>
        </Router>
        </div>
    );
  }
}

export default App;
