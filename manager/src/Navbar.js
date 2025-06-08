import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="Nav">
      <a href="/">
        <p>TempName</p>
      </a>

        <a href="/login">
          <img src="/account.png" alt="Login" className="AccountImg" />
        </a>


    </div>
  )
}
