import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Performance from "./pages/Performance";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import JoinProject from "./pages/JoinProject";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/projectDetails" element={<ProjectDetails />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/create-project" element={<CreateProject/>}/>
        <Route path="/join-project" element={<JoinProject/>}/>
      </Routes>
    </Router>
  );
}

export default App;
