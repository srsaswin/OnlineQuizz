import React, { useContext } from 'react'
import NavBar from '../NavBar'
import "./homePage.css";
import { useNavigate } from 'react-router-dom';
import ContestList from './ContestList';

function Home() {
  
  const userData = JSON.parse(document.cookie)[0];
  const nav = new useNavigate();
  function logOut() {
    document.cookie = `${JSON.parse(document.cookie)}; expires=Sun, 1 January 2010 12:00:00 UTC; path =/`
    nav("/");
  }
  function createContest() {
    nav("/newContest");
  }
  return (
    <div>
      <NavBar userName={userData.username} logoutFum={logOut} ></NavBar>
      <div >
        <div id='teacherHome-body'>
          <button id="teacherHome-createcontest-button" onClick={createContest}>
            create contest
          </button>
          <div id='teacherHome-spliter'>
          </div>
          <div>
            pre contest list:
            <ContestList
              username={userData.username}
              typeOfList={"HOST"}
            />
          </div>
        </div>
        <div>
          <div id='teacherHome-body'>
            <button id="teacherHome-createcontest-button" onClick={()=>{
              const contestIdToJoin = prompt("put contest id here");
              localStorage.setItem("joinContestId",contestIdToJoin);
              nav("/TTcontest")
            }}>
              join contest
            </button>
            <div id='teacherHome-spliter'>
            </div>
            <div>
              pre contest list:
              <ContestList
                username={userData.username}
                typeOfList={"HOST"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home