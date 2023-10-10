import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskViewer.css";

const TaskViewer = (props) => {
  return (
    <>
      <h2>Task Manager</h2>
      <div className="viewer-container">
        {props.dataFields.map((item, index) => (
          <TaskCard
            key={index}
            id={item.id}
            status={item.status}
            description={item.description}
            dueDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TaskViewer;
