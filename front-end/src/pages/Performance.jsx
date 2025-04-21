import React, { useEffect } from "react";
import "../styles/Performance.css";

function Performance() {
  useEffect(() => {
    // Simulate loading bar (demo)
    const fills = document.querySelectorAll(".progress-fill");
    fills.forEach((fill) => {
      const percent = fill.getAttribute("data-width");
      fill.style.width = percent;
    });
  }, []);

  return (
    <div className="performance-container">
      <h2 className="performance-title">Your Performance</h2>

      <div className="metric">
        <div className="metric-label">Accuracy</div>
        <div className="progress-bar">
          <div className="progress-fill" data-width="85%">
            85%
          </div>
        </div>
      </div>

      <div className="metric">
        <div className="metric-label">Tasks Completed</div>
        <div className="progress-bar">
          <div className="progress-fill" data-width="70%">
            70%
          </div>
        </div>
      </div>

      <div className="metric">
        <div className="metric-label">Speed</div>
        <div className="progress-bar">
          <div className="progress-fill" data-width="60%">
            60%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
