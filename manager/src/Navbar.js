import React from 'react'
import './Navbar.css';

export default function Navbar({setParentState}) {
  return (
    <div className="Nav">
      <button onClick={() => setParentState(0)}>
        <p className="Title">TempName</p>
      </button>
        <button onClick={() => setParentState(1)}>
          <img src="/account.png" alt="Login" className="AccountImg" />
        </button>

    </div>
  )
}
