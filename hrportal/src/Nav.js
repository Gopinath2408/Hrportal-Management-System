import React from 'react'
import Employee from './Employee'
import Home from './Home'
import Errormsg from './Errormsg'
import { Routes, Route, Link } from 'react-router-dom';
import Leave_Application from './Leave_Application';
import Project_Assign from './Project_Assign';
const Nav = () => {
  return (
    <div>


     <div className="nav_menu">
          <Link to={"/home"} className="nav_link">Home</Link>
          <Link to={"/employee"} className="nav_link">Employee</Link>
          <Link to={"/leave"} className="nav_link" >Leave</Link>
          <Link to={"/project"} className="nav_link">Project</Link>
          <a href="Employee.js" className="nav_link" style={{ fontWeight: 'bold' }}>Logout</a>
        </div>
    </div>
  )
}

export default Nav
