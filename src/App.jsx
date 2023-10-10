import React from "react";
import "./App.css";
//import TaskCard from "./components/TaskCard/TaskCard";
import TaskViewer from "./components/TaskViewer/TaskViewer";


const App = () => {
  const data = [
    {
      id: "T-1",
      status: "Todo",
      description: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2021, 5, 2),
    },
    {
      id: "T-2",
      status: "In Progress",
      description: "Create a Design ",
      dueDate: new Date(2022, 10, 5),
    },
    {
      id: "T-3",
      status: "Complete",
      description:
        "Create a Design System for Enum Workspace. Design System for Enum Workspace.",
      dueDate: new Date(2023, 7, 1),
    },
    {
      id: "T-4",
      status: "Todo",
      description: "Create.",
      dueDate: new Date(2023, 11, 7),
    },
    {
      id: "T-5",
      status: "In Progress",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      dueDate: new Date(2022, 7, 7),
    },
    {
      id: "T-6",
      status: "Todo",
      description: "Lorem ipsum, dolor  facilis nesciunt ulla",
      dueDate: new Date(2023, 3, 9),
    },
    {
      id: "T-7",
      status: "Complete",
      description: "Create something.",
      dueDate: new Date(2023, 6, 8),
    },
  ];
  return (
    <>
      <TaskViewer dataFields={data} />
    </>
  );
};

export default App;
