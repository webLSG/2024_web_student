import { Chip } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./HSW/Register";

function App() {
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
