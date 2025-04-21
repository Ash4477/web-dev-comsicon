import React, { useState } from "react";
import "../styles/JoinProject.css";
import { useNavigate } from "react-router-dom";

function JoinProject() {
  const [projectCode, setProjectCode] = useState("");
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    console.log("Joined Project:", projectCode);
    navigate("/home");
  };

  return (
    <div className="join-project-container">
      <h2>Join a Project</h2>
      <form onSubmit={handleJoin}>
        <label>Enter Project Code:</label>
        <input
          type="text"
          value={projectCode}
          onChange={(e) => setProjectCode(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default JoinProject;
