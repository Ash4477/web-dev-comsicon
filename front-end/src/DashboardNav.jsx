import { useState } from "react";

const DashboardNav = ({ setActiveProject, projects }) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  return (
    <div className="nav-tab">
      <nav>
        <ul>
          <li>
            <h2>Projects</h2>
          </li>
          {projects.map((proj, idx) => (
            <li key={proj.id}>
              <p
                className={activeProjectIdx === idx ? "active-tab" : ""}
                onClick={() => {
                  setActiveProjectIdx(idx);
                  setActiveProject(proj.id);
                }}
              >
                #{proj.title}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
