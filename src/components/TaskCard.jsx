import React from "react";
import axios from "axios";
import "./TaskCardStyles.css";
import { Link } from "react-router";

const TaskCard = ({ task, fetchAllTasks }) => {
  const handleCompleteTask = async () => {
    try {
      await axios.patch(`https://client-side-routing-backend-khaki.vercel.app/${task.id}`, {
        completed: !task.completed,
      });
      fetchAllTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`https://client-side-routing-backend-khaki.vercel.app/${task.id}`);
      fetchAllTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : "incomplete"}`}>
      <div className="task-card-header">
        <Link to = {`/tasks/${task.id}`}>
          <h2>{task.title}</h2>
        </Link>
        <div className="task-card-header-buttons">
          {task.completed ? (
            <p onClick={handleCompleteTask}>🔄</p>
          ) : (
            <p onClick={handleCompleteTask}>✅</p>
          )}
          <p onClick={handleDeleteTask}>🗑️</p>
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
