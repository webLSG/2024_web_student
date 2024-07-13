import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./JWJ/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Sidebar /> */}
        <Routes>
          {/* <Route path="/" element={<Main />}></Route> */}
          <Route path="/login/*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
