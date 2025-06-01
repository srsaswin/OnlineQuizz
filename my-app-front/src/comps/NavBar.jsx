import React from 'react'

function NavBar({ userName, logoutFum }) {
  return (
    <div id='navbar'>
      <h3>{userName}</h3>
      <button id="logout-button" onClick={logoutFum}>
        <h3>🪵out -{'>'} </h3>
      </button>
      <div></div>
    </div>
  )
}

export default NavBar