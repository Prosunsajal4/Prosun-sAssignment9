import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="container-max font-poppins px-4 py-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
