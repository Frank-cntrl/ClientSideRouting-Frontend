import React from "react";
import { useParams } from "react-router";
import TaskCard from "./TaskCard";
import "./TaskDetails.css";

const TaskDetails = ({tasks, fetchAllTasks, users}) => {
    const params = useParams();
    const id = Number(params.id);

    const selectedTask = tasks.find((task) => task.id === id);

    const selectedTaskUser = users.find((user) => user.id === selectedTask.userId);
    
    return(
    <div>
        <h2 className = "user">{selectedTaskUser.name}'s task</h2>
        <TaskCard task={selectedTask} fetchAllTasks={fetchAllTasks}/>
    </div>
    )
}

export default TaskDetails;