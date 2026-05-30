import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <main id="main-content" className="flex min-h-[60vh] items-center justify-center py-8">
      <div className="text-center">
        <div className="inline-block rounded-3xl bg-gradient-to-br from-indigo-100 to-pink-100 px-12 py-10">
          <h1 className="text-7xl font-extrabold gradient-text">404</h1>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-md"
          >
            <FaHome className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <FaSearch className="h-4 w-4" />
            Browse Skills
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
