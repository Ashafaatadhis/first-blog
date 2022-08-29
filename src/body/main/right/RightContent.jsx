import React from "react";
import "./rightContent.css";
import { Category } from "./category/Category";

export default function RightContent() {
  return (
    <div className="right">
      <h1 className="title">Topics</h1>
      <Category />
      <Category />
      <Category />
    </div>
  );
}
