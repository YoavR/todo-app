import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login-area main" id="login">
				<div className="login-form">
				  <div className="imgcontainer">
				  </div>
				  <div className="container">
				    <label className="login-label"><b>Username</b></label>
				    <input type="text" id="username" name="username" placeholder="Enter Username" required />

				    <label className="login-label"><b>Password</b></label>
				    <input type="password" id="password" name="password" placeholder="Enter Password" required />

				    // <button type="submit" className="login-button" onclick = "login()">Login</button>
						// <button type="submit" className="login-button" onclick = "register()">Register</button>
				  </div>
				</div>
			</div>
    );
  }
}

export default Login;
