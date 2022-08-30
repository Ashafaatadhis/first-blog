import React from "react";
import Jumbotron from "../jumbotron/Jumbotron";
import Category from "../category/Category";
import Content from "../content/Content";

import "./home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Jumbotron />
      <Category />
      <Content />
    </div>
  );
};

export default Home;
