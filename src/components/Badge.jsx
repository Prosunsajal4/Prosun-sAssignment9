/**
 * Badge component - Inline label for categorizing or marking content
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content/text
 * @param {string} [props.variant="default"] - Badge color: default, primary, success, warning, danger, info
 * @param {string} [props.size="sm"] - Badge size: xs, sm, md
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Badge element
 */
const Badge = ({ children, variant = "default", size = "sm", className = "" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    primary: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    info: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  };

  const sizes = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
