import { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";

/**
 * Select component - Accessible dropdown select input
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.label] - Select label text
 * @param {Array<{value: string, label: string}>} [props.options=[]] - Select options
 * @param {string} [props.placeholder="Select an option"] - Placeholder text
 * @param {string} [props.error] - Error message to display
 * @param {boolean} [props.disabled=false] - Disable select
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Select field
 */
const Select = forwardRef(
  ({
    label,
    options = [],
    placeholder = "Select an option",
    error,
    disabled = false,
    className = "",
    ...props
  }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {label}
            {props.required && (
              <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            disabled={disabled}
            className={`
              block w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm text-slate-900
              transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
              disabled:opacity-50 disabled:cursor-not-allowed
              dark:border-slate-700 dark:bg-slate-800 dark:text-white
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-slate-200"
              }
              ${className}
            `}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.id}-error` : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <FaChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p id={`${props.id}-error`} className="mt-1.5 text-xs text-red-500 dark:text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
