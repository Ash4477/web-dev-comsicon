import "./styles/Dashboard.css";

const Dashboard = () => {
  const projects = ["proj1", "proj2", "proj3"];
  return (
    <div className="dashboard">
      <div className="nav-tab">
        <nav>
          <ul>
            {projects.map((proj, idx) => (
              <li key={idx}>#{proj}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="task-board">
        <div className="board-header">
          <h1>Project Title</h1>
        </div>
        <div className="board-main">
          <p>Project Tasks</p>
        </div>
        <div className="board-footer">
          <p>Message here or stuff !!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
