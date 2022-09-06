import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  console.log(location);
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
      document.getElementById("nav").style.backgroundColor = "white";
      document.getElementById("nav").style.boxShadow = "0 4px 2px -2px #f1f1f1";
      document.getElementById("nav-title").style.color = "black";
    } else {
      document.getElementById("nav").style.background = 0;
      document.getElementById("nav").style.boxShadow = "none";
      document.getElementById("nav").style.border = 0;
      document.getElementById("nav-title").style.color = "white";
    }
  });
  return (
    <nav id="nav">
      <div className="container">
        <div className="nav-title" id="nav-title">
          Ad<span>his</span>
        </div>
        {location.pathname == "/admin" ? (
          <div className="nav-link">
            <Link to="/logout">Logout</Link>
          </div>
        ) : (
          <div className="nav-link">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
