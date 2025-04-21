import { useNavigate } from "react-router-dom";

import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </form>
      <div className="switch-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}

export default Login;
