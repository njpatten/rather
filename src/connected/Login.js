import React from 'react';
import './Login.css';
//get users

class Login extends React.Component () {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        {/* map through users */}
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    );
  }
}

export default Login;
