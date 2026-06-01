import { forwardRef } from "react";

/**
 * Textarea component - Accessible multiline text input with validation support
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.label] - Textarea label text
 * @param {number} [props.rows=4] - Number of visible rows
 * @param {string} [props.error] - Error message to display
 * @param {string} [props.helperText] - Helper text below textarea
 * @param {boolean} [props.required] - Mark as required
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Textarea field
 */
const Textarea = forwardRef(
  ({
    label,
    error,
    helperText,
    rows = 4,
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
        <textarea
          ref={ref}
          rows={rows}
          className={`
            block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400
            transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
            resize-y
            dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500
            ${
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-200"
            }
            ${className}
          `}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
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

Textarea.displayName = "Textarea";

export default Textarea;
