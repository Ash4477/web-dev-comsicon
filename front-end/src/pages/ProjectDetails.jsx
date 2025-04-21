import React from "react";
import "../styles/ProjectDetails.css";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams(); // project ID from route

  // Placeholder data (replace with context or API call later)
  const project = {
    id,
    name: "Hackathon Management System",
    description:
      "This system helps manage projects, teams, and scoring during hackathons.",
    members: [
      { name: "Ali", tasks: ["Design UI", "Fix bug #123"] },
      { name: "Sara", tasks: ["Backend logic", "APIs"] },
    ],
  };

  return (
    <div className="project-details-container">
      <h2>{project.name}</h2>
      <p className="project-description">{project.description}</p>

      <h3>Members & Tasks</h3>
      <div className="member-list">
        {project.members.map((member, index) => (
          <div key={index} className="member-card">
            <h4>{member.name}</h4>
            <ul>
              {member.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
