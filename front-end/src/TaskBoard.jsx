import { useState } from "react";
import { FaCheck, FaSquare, FaPaperPlane } from "react-icons/fa";

const TaskBoard = ({ project, setProjects }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  console.log(project);

  const sendMessage = () => {
    console.log(message);
    if (message.trim() === "") return;
    setProjects((projs) => {
      return projs.map((proj) => {
        if (proj.id === project.id) {
          console.log("Grape");
          return { ...proj, messages: [...proj.messages, { text: message }] };
        } else {
          return proj;
        }
      });
    });
    setMessage("");
  };

  return (
    <div className="task-board">
      <div className="board-header">
        <h1>{project.title}</h1>
      </div>
      <div className="board-main">
        <div className="tasks-box">
          <ul>
            <li>Tasks:</li>
            {project.tasks.map((task) => (
              <li key={task.id} className="task-bar">
                <p
                  style={
                    task.isComplete === true
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  {task.title}
                </p>
                <span
                  onClick={() =>
                    setProjects((projs) => {
                      return projs.map((proj) => {
                        if (proj.id === project.id) {
                          return {
                            ...proj,
                            tasks: proj.tasks.map((prevTask) => {
                              if (prevTask.id === task.id) {
                                return {
                                  ...prevTask,
                                  isComplete: !prevTask.isComplete,
                                };
                              } else {
                                return prevTask;
                              }
                            }),
                          };
                        } else {
                          return proj;
                        }
                      });
                    })
                  }
                >
                  {task.isComplete === true ? (
                    <FaCheck
                      style={{
                        border: "1px solid white",
                        width: "25px",
                        height: "25px",
                        padding: "5px",
                        borderRadius: "1px",
                        color: "black",
                        backgroundColor: "white",
                      }}
                    />
                  ) : (
                    <FaSquare
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="messages-box">
          <ul>
            <li>Messages: </li>
            {project.messages.map((msg, idx) => (
              <li key={idx} className="message-bubble">
                {msg.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="board-footer">
        <input
          placeholder="Message Here"
          type="text"
          id="message-box"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#141e61",
            color: "white",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={sendMessage}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default TaskBoard;
