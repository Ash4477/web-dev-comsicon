import React from "react";
import "../styles/ProjectDetails.css";

function ProjectDetails() {
  // Dummy data
  const project = {
    name: "Hackathon Management System",
    description:
      "A web app to manage hackathon participants, performance, and projects efficiently.",
    status: "In Progress",
    technologies: ["React", "Node.js", "MongoDB", "Express", "CSS"],
    members: ["Alice", "Bob", "Charlie"],
  };

  return (
    <div className="project-container">
      <h2 className="project-title">{project.name}</h2>

      <div className="project-info">
        <h4>Description</h4>
        <p>{project.description}</p>
      </div>

      <div className="project-info">
        <h4>Status</h4>
        <p>{project.status}</p>
      </div>

      <div className="project-info">
        <h4>Technologies</h4>
        <div className="tag-list">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-info">
        <h4>Team Members</h4>
        <div className="tag-list">
          {project.members.map((member, index) => (
            <span key={index} className="tag">
              {member}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
