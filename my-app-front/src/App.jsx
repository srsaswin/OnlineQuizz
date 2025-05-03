import React, { createContext, useState } from 'react'
import QQtag from './comps/QQtag'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './comps/LoginAndSigin/Login';
import Sigin from './comps/LoginAndSigin/Signin';
import TeacherAndStudentHome from './comps/Home/TeacherAndStudentHome';
import TeacherHome from './comps/Home/TeacherHome';
import NavBar from './comps/NavBar';
import NewContest from './comps/InitTest/NewContest';


function App() {

  return (
    <> 
    <BrowserRouter>
      <Routes> 
        <Route path='/TeacherLogin' element={<TeacherHome/>}/>
        <Route  path='/' element={<Login/>}/>
        <Route path='/TeacherAndStudentHome' element={<TeacherAndStudentHome/>}/>
        <Route path='/Signin' element={<Sigin/>} />
        <Route path='/newContest' element={<NewContest/>}/>
      </Routes>
    </BrowserRouter>
    
    </>

  )
}

export default App