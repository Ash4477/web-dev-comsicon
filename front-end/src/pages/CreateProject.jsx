import React, { useState } from "react";
import "../styles/CreateProject.css";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to context or API later
    console.log("Project Created:", projectName);
    navigate("/home");
  };

  return (
    <div className="create-project-container">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateProject;
