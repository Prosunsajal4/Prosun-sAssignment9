import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col font-poppins">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <div className="container-max flex-1 px-4 py-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
