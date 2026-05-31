import { FaCheck } from "react-icons/fa";

const Checkbox = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  indeterminate = false,
  className = "",
}) => {
  return (
    <label
      className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only peer"
      />
      <span className="flex h-5 w-5 items-center justify-center rounded-lg border-2 border-slate-300 peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2 transition dark:border-slate-600 dark:peer-checked:border-indigo-400 dark:peer-checked:bg-indigo-400">
        {(checked || indeterminate) && (
          <FaCheck className="h-3 w-3 text-white" />
        )}
      </span>
      {label && <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>}
    </label>
  );
};

export default Checkbox;
