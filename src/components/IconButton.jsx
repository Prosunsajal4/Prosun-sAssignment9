const IconButton = ({
  children,
  onClick,
  variant = "ghost",
  size = "md",
  rounded = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const variants = {
    ghost: "text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300",
    primary: "text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800",
    danger: "text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20",
  };

  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${rounded ? "rounded-full" : "rounded-xl"} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
