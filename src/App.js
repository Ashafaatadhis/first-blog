import "./app.css";
import HomeComp from "./component/HomeComp";
import PostComp from "./component/PostComp";
import AdminComp from "./component/AdminComp";
// import LoginComp from "./component/LoginComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeComp />} />
            <Route path="login" element={<Login />} />
            <Route path="post" element={<PostComp />} />
            <Route path="admin" element={<AdminComp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
