import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      /><br/><br/>

      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      /><br/><br/>

    
      <Link to="/book">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Login;
