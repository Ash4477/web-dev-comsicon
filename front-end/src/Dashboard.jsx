import { useState } from "react";
import DashboardNav from "./DashboardNav";
import TaskBoard from "./TaskBoard";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [activeProject, setActiveProject] = useState("proj1");
  const [projects, setProjects] = useState([
    {
      id: "proj1",
      title: "getting stuff done",
      tasks: [
        { id: "task1", title: "getting stuff 1 done", isComplete: false },
        { id: "task2", title: "getting stuff 2 done", isComplete: false },
      ],
      messages: [
        {
          text: "not getting done, are we?",
        },
      ],
      status: true,
    },
    {
      id: "proj2",
      title: "kill asfar",
      tasks: [
        { id: "task1", title: "kill asfar 1st time", isComplete: false },
        { id: "task2", title: "kill asfar again", isComplete: false },
      ],
      messages: [
        {
          text: "asfar is joking",
        },
        { text: "asfar is a joker" },
      ],
      status: true,
    },
    {
      id: "proj3",
      title: "win hackathon",
      tasks: [
        { id: "task1", title: "win hackathon", isComplete: false },
        { id: "task2", title: "steal stuff from hackathon", isComplete: false },
      ],
      messages: [
        {
          text: "something",
        },
        { text: "that thins" },
      ],
      status: true,
    },
  ]);

  const getActiveProject = () => {
    return projects.find((proj) => proj.id == activeProject);
  };

  return (
    <div className="dashboard">
      <DashboardNav setActiveProject={setActiveProject} projects={projects} />
      <TaskBoard project={getActiveProject()} setProjects={setProjects} />
    </div>
  );
};

export default Dashboard;
