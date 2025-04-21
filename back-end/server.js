const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const connectDB = require("./db.js");
const { Server } = require("socket.io");
const Project = require("./models/projectsmodel");

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Change this to your React app's URL/port
    methods: ["GET", "POST"],
  },
});

// const addProject = async () => {
//   try {
//     await Project.create({
//       status: "pending",
//       title: "prepare for exams",
//       messages: [{ text: "asfar is king" }, { text: "asfar is cool" }],
//       tasks: [
//         { id: "task1", title: "getting stuff 1 done", isComplete: false },
//         { id: "task2", title: "getting stuff 2 done", isComplete: false },
//       ],
//     });
//     console.log("HAHAHAHA");
//   } catch (err) {
//     console.log(err);
//   }
// };

// addProject();

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/projects", async (req, res) => {
  try {
    const { name, status, teamMembers } = req.body;
    const message = await Project.create({
      name,
      status,
      teamMembers,
      messages,
    });
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("send_message", (data) => {
    console.log("Message received:", data);
    io.emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3001, () => {
  console.log("Socket.IO server running on port 3001");
});
