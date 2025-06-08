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
  const username = document.querySelector('.createAcctInput[type="text"]').value;
  const password = document.querySelector('.createAcctInput[type="password"]').value;

  if(username && password){
    createNewUser(username, password);
  }
  else alert("Please Enter A Uername And Password");
}