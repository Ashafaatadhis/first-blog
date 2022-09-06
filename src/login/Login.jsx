import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form method="get">
          <input id="username" type="text" placeholder="username" />
          <input id="password" type="password" placeholder="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
