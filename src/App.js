import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/users" >Users</Link>
          </li>
        </ul>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/users" component={ Users } />
      </BrowserRouter>
    );
  }
}

export default App;
