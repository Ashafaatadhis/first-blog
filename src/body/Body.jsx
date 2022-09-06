import React, { useEffect } from "react";
import Home from "./home/Home";

const Body = () => {
  useEffect(() => {
    document.title = "Adhis Blog";
  }, []);
  return <Home />;
};

export default Body;
