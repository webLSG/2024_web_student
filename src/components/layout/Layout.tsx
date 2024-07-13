import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ClassContents from "../organism/ClassContents";
import Login from "../organism/Login";
import Main from "../organism/Main";
import Register from "../organism/Register";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/classcontent" element={<ClassContents />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
