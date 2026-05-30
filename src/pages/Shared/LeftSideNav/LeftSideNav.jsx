import { Link } from "react-router-dom";
import { FaBook, FaBriefcase, FaHeart } from "react-icons/fa";

const LeftSideNav = () => {
  const links = [
    { label: "About", to: "/about", icon: FaBook },
    { label: "Career", to: "/career", icon: FaBriefcase },
    { label: "Addict", to: "/addict", icon: FaHeart },
  ];

  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Explore
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">
          Quick Links
        </h2>
      </div>
      <div className="space-y-2">
        {links.map(({ label, to, icon: Icon }) => (
          <Link
            key={label}
            className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            to={to}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default LeftSideNav;
