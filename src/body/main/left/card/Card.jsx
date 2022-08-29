import React from "react";
import "./card.css";

export const Card = () => {
  return (
    <div className="card">
      <div className="card-banner">
        <img src="https://dummyimage.com/250" alt="" />
      </div>
      <div className="card-info">
        <p className="card-category">Database</p>
        <h1 className="card-title">Lorem ipsum dolor sit amet.</h1>
        <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, consectetur.</p>
        <div className="wrapper-flex">
          <div className="profile-wrapper">
            <img src="https://dummyimage.com/50x50/000/fff&text=test" alt="" className="author" />
          </div>
          <div className="wrapper">
            <a href="#">Adhis</a>
            <p>Jan 17, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
