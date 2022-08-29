import React from "react";
import "./jumbotron.css";

export default function Jumbotron() {
  return (
    <section className="jumbotron">
      <div className="container">
        <h1 className="title">
          Hi, I'm <span>Adhis Mauliyahsa Ashafaat</span>. <div>Web Developer</div>
        </h1>
        <p className="description">Still learning stack MERN</p>
        <button className="contactMe">Contact Me</button>
        <button className="aboutMe">About Me</button>
      </div>
    </section>
  );
}
