import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import StrictAccess from './components/StrictAccess';
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
            <Link to="/users/1" >Users</Link>
          </li>
          <li>
            <Link to="/strict-access" >Strict Access</Link>
          </li>
        </ul>
        <Switch>
          <Route 
            path="/users/:id" 
            render={ (props) => <Users {...props} greetingsMessage="Good Morning" />} 
          />
          <Route path="/about" component={ About } />
          <Route path="/strict-access" render={ (props) => <StrictAccess {...props} user={ { username: 'joao', password: '1234' } } />} />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
