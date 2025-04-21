import React from "react";
import "../styles/Login.css";


function Signup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <div className="switch-link">
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
}

export default Signup;
