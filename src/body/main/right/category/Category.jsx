import React from "react";
import "./category.css";
import { FiDatabase } from "react-icons/fi";

export const Category = () => {
  return (
    <div className="category">
      <div className="category-icon">
        <FiDatabase />
      </div>
      <div className="category-name">Database</div>
    </div>
  );
};
