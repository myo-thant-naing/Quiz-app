import { Outlet } from "react-router";
import Nav from "./components/Nav";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
