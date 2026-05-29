import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/addict">Addict</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className="navbar bg-white/60 backdrop-blur-sm shadow-sm sticky top-0 z-40"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container-max mx-auto w-full px-4 flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              aria-label="Mobile navigation"
            >
              {navLinks}
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1"
            aria-label="Primary navigation"
          >
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
            aria-label="User menu"
          >
            <div className="w-10 rounded-full ring-2 ring-indigo-300 overflow-hidden">
              <img src={userDefaultPic} alt="User avatar" />
            </div>
          </label>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
