import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-banner">
        <img src="https://placeimg.com/300/200/any" alt="" />
      </div>
      <div className="card-wrapper">
        <p className="card-category">MOBILE</p>
        <Link to="/post">
          <h1 className="card-title">How To Create UX Design With Adobe XD</h1>
        </Link>
        <p className="card-timestamp">12 FEB 2022</p>
        <p className="card-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit inventore qui adipisci nesciunt? Sed porro facilis voluptatem reprehenderit quasi.</p>
        <div className="card-profile-wrapper">
          <div className="card-profile">
            <img src="https://placeimg.com/56/56/any" alt="" />
          </div>
          <p className="card-author-name">Adhis Mauliyahsa</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
