import { Outlet } from "react-router";
import Nav from "./components/Nav";
import { Howl } from "howler";

const Layout = () => {
  const sound = new Howl({
    src: ["/bg.mp3"],
    loop: true,
    volume: 0.1,
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Outlet context={{ sound }} />
    </div>
  );
};

export default Layout;
