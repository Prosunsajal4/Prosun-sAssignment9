import { Link } from "react-router-dom";
import { FaBook, FaBriefcase, FaHeart, FaHome } from "react-icons/fa";

const LeftSideNav = () => {
  const links = [
    { label: "Home", to: "/", icon: FaHome },
    { label: "About", to: "/about", icon: FaBook },
    { label: "Career", to: "/career", icon: FaBriefcase },
    { label: "Favorites", to: "/addict", icon: FaHeart },
  ];

  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Navigate
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
          Quick Links
        </h2>
      </div>
      <nav className="space-y-1">
        {links.map(({ label, to, icon: Icon }) => (
          <Link
            key={label}
            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-all hover:bg-indigo-50 hover:text-indigo-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
            to={to}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400">
              <Icon className="h-4 w-4" />
            </span>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default LeftSideNav;
