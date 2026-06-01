import { forwardRef, useState } from "react";
import { FaEye, FaEyeSlash, FaExclamationCircle } from "react-icons/fa";

/**
 * Input component - Accessible text input with optional icon, validation, and password toggle
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.label] - Input label text
 * @param {string} [props.type="text"] - Input type
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.helperText] - Helper text below input
 * @param {React.ComponentType} [props.icon] - Icon component to display
 * @param {boolean} [props.required] - Mark as required
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Input field
 */
const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      icon: Icon,
      type = "text",
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

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
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={`
              block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400
              transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
              dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-slate-200"
              }
              ${Icon ? "pl-10" : ""}
              ${isPassword ? "pr-10" : ""}
              ${className}
            `}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
            </button>
          )}
          {error && !isPassword && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
              <FaExclamationCircle className="h-4 w-4" />
            </div>
          )}
        </div>
        {error && (
          <p id={`${props.id}-error`} className="mt-1.5 text-xs text-red-500 dark:text-red-400" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${props.id}-helper`} className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
