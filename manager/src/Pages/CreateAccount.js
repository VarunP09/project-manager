import React from 'react'
import './CreateAccount.css';
import { createNewUser, sleep } from '../firebase.js';

export default function CreateAccount({setParentState}) {
  // Function to handle account creation
  function handleSubmit(){
    const username = document.querySelector('.createAcctInput[type="text"]');
    const email = document.querySelector('.createAcctInput[type="email"]');
    const password = document.querySelector('.createAcctInput[type="password"]');
  
    if(email.value && password.value){
      createNewUser(username.value ,email.value, password.value);
      username.value = '';
      email.value = '';
      password.value = '';
      sleep(2000);
      setParentState(1);
    }
    else alert("Please Enter A Uername And Password");
  }

  return (
    <div className="createAcctContainer">
      <div>Create Account</div>
      <div className="createAcctInfo">
        <p className="createAcctSubtitle">Enter Username</p>
        <input className="createAcctInput" type="text" placeholder="Enter Username" />
        <p className="createAcctSubtitle">Enter Email</p>
        <input className="createAcctInput" type="email" placeholder="Enter Email" />
        <p className="createAcctSubtitle">Create Password</p>
        <input className="createAcctInput" type="password" placeholder="Enter Password" />
      </div>
      <button className="createAcctSubmit" onClick={handleSubmit}>Create Account</button>
    </div>
  )
}



