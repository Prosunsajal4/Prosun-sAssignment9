import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Career
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addict"
          className={({ isActive }) =>
            `rounded-xl px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`
          }
        >
          Favorites
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur-lg"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container-max mx-auto w-full px-4 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-md">
            <FaGraduationCap className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold text-slate-900 hidden sm:block">
            Esho Shikhi
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-1" aria-label="Primary navigation">
            {navLinks}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-white rounded-2xl w-56 border border-slate-100"
              aria-label="Mobile navigation"
            >
              {navLinks}
            </ul>
          </div>
        </div>

        {/* User actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="relative">
                <div className="h-9 w-9 rounded-full ring-2 ring-indigo-200 overflow-hidden shadow-sm">
                  <img
                    src={user?.photoURL || userDefaultPic}
                    alt="User avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
              </div>
              <button
                onClick={handleSignOut}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
