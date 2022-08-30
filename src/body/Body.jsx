import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Post from "./post/Post";

const Body = () => {
  useEffect(() => {
    document.title = "Adhis Blog";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="*" element={<h1>unddfined</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
