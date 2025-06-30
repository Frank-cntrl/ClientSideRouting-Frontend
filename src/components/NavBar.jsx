import React from "react";
import "./NavBarStyles.css";
import { NavLink } from "react-router";
 
const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to = "/">All Tasks</NavLink>
      <NavLink to = "/completed-tasks">Completed Tasks</NavLink>
      <NavLink to ="/incomplete-tasks">Incomplete Tasks</NavLink>
      <NavLink to ="/add-task">Add Task</NavLink>
    </nav>
  );
};

export default NavBar;
