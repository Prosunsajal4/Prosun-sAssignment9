import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <aside className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Explore
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">Categories</h2>
      </div>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              className="block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-700"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSideNav;
