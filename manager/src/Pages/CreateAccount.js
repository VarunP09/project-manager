import React from 'react'
import './CreateAccount.css';
import { createNewUser } from '../firebase.js';

export default function CreateAccount() {
  return (
    <div className="createAcctContainer">
      <div>Create Account</div>
      <div className="createAcctInfo">
        <p className="createAcctSubtitle">Create Username</p>
        <input className="createAcctInput" type="text" placeholder="Enter Username" />
        <p className="createAcctSubtitle">Create Password</p>
        <input className="createAcctInput" type="password" placeholder="Enter Password" />
      </div>
      <button className="createAcctSubmit" onClick={handleSubmit}>Create Account</button>
    </div>
  )
}

function handleSubmit(){
  const username = document.querySelector('.createAcctInput[type="text"]');
  const password = document.querySelector('.createAcctInput[type="password"]');

  if(username.value && password.value){
    createNewUser(username.value, password.value);
    username.value = '';
    password.value = '';
    sleep(2000);
    window.location.pathname = '/login';
  }
  else alert("Please Enter A Uername And Password");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}