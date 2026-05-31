import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const Breadcrumb = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
          >
            <FaHome className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <FaChevronRight className="h-3 w-3 text-slate-300 dark:text-slate-600" />
            {item.href ? (
              <Link
                to={item.href}
                className="text-slate-500 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-medium dark:text-white">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
