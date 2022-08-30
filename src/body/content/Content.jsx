import React from "react";
import Card from "./card/Card";
import "./content.css";

const Content = () => {
  return (
    <section className="content">
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Content;
