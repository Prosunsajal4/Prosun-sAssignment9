import { cloneElement, Children } from "react";

const FormField = ({
  label,
  error,
  required = false,
  description,
  children,
  className = "",
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
          {required && (
            <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
          )}
        </label>
      )}
      {description && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
      {Children.map(children, (child) => {
        if (child && typeof child === "object" && "props" in child) {
          return cloneElement(child, {
            "aria-invalid": error ? "true" : undefined,
            "aria-describedby": error ? `${child.props.id}-error` : undefined,
          });
        }
        return child;
      })}
      {error && (
        <p className="text-xs text-red-500 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
