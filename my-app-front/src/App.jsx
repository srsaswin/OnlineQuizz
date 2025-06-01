import React, { createContext, useState } from 'react'
import QQtag from './comps/QQtag'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './comps/LoginAndSigin/Login';
import Sigin from './comps/LoginAndSigin/Signin';
import TeacherAndStudentHome from './comps/Home/TeacherAndStudentHome';
import TeacherHome from './comps/Home/Home';
import NavBar from './comps/NavBar';
import NewContest from './comps/InitTest/NewContest';
import Home from './comps/Home/Home';
import TTpage from './comps/TestContest/TTpage';


function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/' element={<Login />} />
            <Route path='/Signin' element={<Sigin />} />
            <Route path='/newContest' element={<NewContest />} />
            <Route path='/TTcontest' element={<TTpage/>} />
          </Routes>
        </BrowserRouter>
    </>

  )
}

export default App