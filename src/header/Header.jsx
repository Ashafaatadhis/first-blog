import React from "react";
import "./header.css";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const menuHandler = (e) => {
    document.getElementById("nav-hp").style.transform = "translateX(0)";
  };

  const closeHandler = (e) => {
    document.getElementById("nav-hp").style.transform = "translateX(100%)";
  };
  return (
    <nav>
      <div className="nav-hp" id="nav-hp">
        <div className="container hp-helper">
          <div className="hp-left">
            <div className="navbar">
              <button className="menu" onClick={closeHandler}>
                <IoClose />
              </button>
            </div>
            <div className="main-menu">
              <h1>Main Menu</h1>
              <p>Home</p>
              <p>About Me</p>
              <p>Contact</p>
            </div>
            <div className="garis"></div>
            <div className="topics">
              <h1>Topics</h1>
              <p>Database</p>
              <p>Database</p>
              <p>Database</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <a href="#">Title</a>
         */}
        <div className="navbar">
          <h1>Adhis</h1>
          <button className="menu" onClick={menuHandler}>
            <BiMenu />
          </button>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
