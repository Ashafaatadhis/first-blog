import React from "react";
import RightContent from "./right/RightContent";
import LeftContent from "./left/LeftContent";
import "./main.css";

export default function Main() {
  return (
    <section className="main">
      <div className="container">
        <div className="post">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </section>
  );
}
