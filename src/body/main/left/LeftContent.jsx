import React from "react";
import "./leftContent.css";
import { Card } from "./card/Card";

export default function LeftContent() {
  return (
    <div className="left">
      <h1 className="title">Latest Blog Post</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
