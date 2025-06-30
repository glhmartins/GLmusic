import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <div className="container mt-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;