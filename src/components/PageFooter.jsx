import { FaHeart } from "react-icons/fa";

const PageFooter = ({
  text = "Built with",
  heart = true,
  brand = "Esho Shikhi",
  year = new Date().getFullYear(),
  className = "",
}) => {
  return (
    <footer className={`border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {text}{" "}
          {heart && (
            <FaHeart className="inline h-3 w-3 text-red-500" aria-hidden="true" />
          )}{" "}
          {brand} &copy; {year}
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
