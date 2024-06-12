import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Employee from './Employee';
import Home from './Home';
import Errormsg from './Errormsg';
import { Routes, Route, Link } from 'react-router-dom';
import Leave_Application from './Leave_Application';
import Project_Assign from './Project_Assign';
import Login from './Login';
import NewEmployee from './NewEmployee';
import AttendanceLogin from './AttendanceLogin';
import AttendanceLogout from './AttendanceLogout';
const App = () => {
  
  return (
      
    <div>
    <Routes>  
       <Route path='/employee' element={<Employee />}/> 
       <Route path='/home' element={<Home />} />
       <Route path='/leave' element={<Leave_Application />} />
       <Route path='/project' element={<Project_Assign />} />
       <Route path='/' element={<Home />}/>
       <Route path='/newemp'element={<NewEmployee />}/>
       <Route path='/attlogin' element={<AttendanceLogin />} />
       <Route path='/attlogout' element={<AttendanceLogout />}/>
     </Routes>

     

      
    </div>
  );
}

export default App
