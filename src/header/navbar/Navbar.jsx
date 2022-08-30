import React from "react";
import "./navbar.css";

const Navbar = () => {
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
        <div className="nav-link">
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
