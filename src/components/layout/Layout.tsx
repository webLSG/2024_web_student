import { Home } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Home />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
