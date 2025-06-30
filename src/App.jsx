import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  async function fetchAllTasks() {
    try {
      const response = await axios.get("http://localhost:8080/api/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  const [users, setUsers] = useState([]);

  async function fetchAllUsers() {
    try{
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch(error){
      console.error("Error fetching Users: ", error);
    }
    
  }

  useEffect(() =>{
    fetchAllUsers();
  }, []);

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path = "/" element ={<TaskList tasks={tasks} fetchAllTasks={fetchAllTasks} />} />

        <Route path="/completed-tasks" element={<TaskList tasks={tasks.filter(task => task.completed)} fetchAllTasks={fetchAllTasks} />}/>
          
        <Route path="/incomplete-tasks" element={<TaskList tasks={tasks.filter(task => !task.completed)} fetchAllTasks={fetchAllTasks} />}/>

        <Route path = "/add-task" element = {<AddTask fetchAllTasks={fetchAllTasks} />} />

        <Route path = "/tasks/:id" element = {<TaskDetails tasks = {tasks} fetchAllTasks={fetchAllTasks} users = {users}/>}/>

      </Routes>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
