import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Dummy data – replace with real state/context later
  const user = { username: "Abdur" };
  const projects = [
    { id: 1, name: "Hackathon Management System" },
    { id: 2, name: "AI Judge Scoring" },
  ];

  const handleProjectClick = (id) => {
    navigate(`/project-details/${id}`); // Assuming dynamic routing
  };

  return (
    <div className="home-container">
      <h2>Welcome, {user.username} 👋</h2>

      <div className="home-actions">
        <button
          className="home-btn"
          onClick={() => navigate("/create-project")}
        >
          ➕ Create New Project
        </button>
        <button className="home-btn" onClick={() => navigate("/join-project")}>
          🔗 Join a Project
        </button>
      </div>

      <h3>Your Projects</h3>
      <div className="project-list">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card"
            onClick={() => handleProjectClick(proj.id)}
          >
            <h4>{proj.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
