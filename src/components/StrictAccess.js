// arquivo Users.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  constructor(props) {
    super(props);
    this.renderResult = this.renderResult.bind(this);
  }

  renderDenied() {
    alert('Access denied')
    return (
      <Redirect to="/" />
    );
  }

  renderResult() {
    const { user: { username, password } } = this.props;

    return username === 'joao' && password === '1234' ? <p>Welcome joao!</p> : this.renderDenied()
  }
  
  render() {
    return (
      <div>
        <h2>Strict Access</h2>
        { this.renderResult() }
      </div>
    );
  }
};

export default StrictAccess;

