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
    <aside className="space-y-6 bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Categories</h2>
      <ul className="mt-2 space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              className="block text-sm text-gray-700 hover:text-indigo-600"
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
