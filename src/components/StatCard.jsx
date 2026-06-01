import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const StatCard = ({
  label,
  value,
  change,
  changeType = "increase",
  icon,
  className = "",
}) => {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
          {change !== undefined && (
            <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${
              changeType === "increase" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {changeType === "increase" ? (
                <FaArrowUp className="h-3 w-3" />
              ) : (
                <FaArrowDown className="h-3 w-3" />
              )}
              <span>{change}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
