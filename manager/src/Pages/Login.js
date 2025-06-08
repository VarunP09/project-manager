import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="LoginContainer">
      <div>Log in</div>
      <div className="loginInfo">
        <p className="loginSubtitle">Username</p>
        <input className="loginInput" type="text" placeholder="Enter Username" />
        <p className="loginSubtitle">Password</p>
        <input className="loginInput" type="password" placeholder="Enter Password" />
      </div>
      <button className="loginSubmit">Log in</button>

      <a href="/createAccount" className="newAccount">Create An Account</a>
    </div>
    
  )
}
