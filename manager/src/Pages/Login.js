import React from 'react';
import './Login.css';
import { loginUser, sleep } from '../firebase.js';


export default function Login({setParentState, logInStatus}) {
  // Function to handle login
  function login(){
    const email = document.querySelector('.loginInput[type="text"]');
    const password = document.querySelector('.loginInput[type="password"]');
  
    if(email.value && password.value){
      loginUser(email.value, password.value);
      email.value = '';
      password.value = '';
      sleep(2000);
      setParentState(0);
    }
    else alert("Please Enter A Valid Email And Password");
  }

  return (
    <div className="LoginContainer">
      <div>Log in</div>
      <div className="loginInfo">
        <p className="loginSubtitle">Email</p>
        <input className="loginInput" type="text" placeholder="Enter Email" />
        <p className="loginSubtitle">Password</p>
        <input className="loginInput" type="password" placeholder="Enter Password" />
      </div>
      <button className="loginSubmit" onClick={login}>Log in</button>

      <button className="newAccount" onClick={() => setParentState(2)}>Create An Account</button>
    </div>
    
  )
}


