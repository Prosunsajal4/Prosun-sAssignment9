import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins px-4 py-6">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
