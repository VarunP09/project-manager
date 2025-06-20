import React from 'react';
//import {user} from '../firebase.js';


export default function Home({user}) {
  if(user){
    return (
      <div>Home {user.uid}</div>
    )
  }
  else{
    return (
      <div>Welcome</div>
    )
  }
}
