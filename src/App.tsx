import Layout from "./components/layout/Layout";

import { Chip } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./HSW/Register";

function App() {
  return (
    <div className="px-80 py-5">
      <Layout />
    </div>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/register" Component={Register}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
