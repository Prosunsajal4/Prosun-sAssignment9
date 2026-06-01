import { useState, useRef, useEffect } from "react";
import { FaUser, FaCog, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ClickOutside from "./ClickOutside";

const UserMenu = ({ user, onLogout, className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setOpen(false)} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <div className="h-7 w-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" className="h-full w-full rounded-full object-cover" />
          ) : (
            user?.displayName?.charAt(0) || user?.email?.charAt(0) || "U"
          )}
        </div>
        <span className="hidden sm:block">{user?.displayName || user?.email?.split("@")[0]}</span>
        <FaChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-slate-200 bg-white py-2 shadow-lg dark:border-slate-700 dark:bg-slate-800" role="menu">
          <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-700">
            <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.displayName}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
          </div>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700"
            onClick={() => setOpen(false)}
          >
            <FaUser className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700"
            onClick={() => setOpen(false)}
          >
            <FaCog className="h-4 w-4" />
            Settings
          </Link>
          <hr className="my-1 border-slate-100 dark:border-slate-700" />
          <button
            onClick={() => { onLogout(); setOpen(false); }}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <FaSignOutAlt className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      )}
    </ClickOutside>
  );
};

export default UserMenu;
