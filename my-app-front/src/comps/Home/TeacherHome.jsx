import React from 'react'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom';

function TeacherHome() {
  const userData = JSON.parse(document.cookie)[0];
  const nav = new useNavigate();
  function logOut() {
    document.cookie = `${JSON.parse(document.cookie)}; expires=Sun, 1 January 2010 12:00:00 UTC; path =/`
    nav("/");
  }
  function createContest(){
    nav("/newContest");
  }
  return (
    <div>
      <NavBar userName={userData.username } logoutFum={logOut} ></NavBar>
      <div>
        <button onClick={createContest}>
          create contest
        </button>
      </div>
    </div>
  )
}

export default TeacherHome