import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassContents from "../organism/ClassContents";
import Login from "../organism/Login";
import Main from "../organism/Main";
import Register from "../organism/Register";
import Layout from "./Layout";

const UseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/classcontent" element={<ClassContents />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default UseRouter;
