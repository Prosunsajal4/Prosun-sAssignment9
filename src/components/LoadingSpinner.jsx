const LoadingSpinner = ({
  size = "md",
  color = "indigo",
  fullScreen = false,
  label = "Loading...",
  className = "",
}) => {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-2",
    lg: "h-12 w-12 border-3",
    xl: "h-16 w-16 border-4",
  };

  const colors = {
    indigo: "border-indigo-600 border-t-transparent",
    white: "border-white border-t-transparent",
    slate: "border-slate-400 border-t-transparent",
  };

  const spinner = (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className={`rounded-full animate-spin ${sizes[size]} ${colors[color]}`}
        role="status"
        aria-label={label}
      />
      <span className="sr-only">{label}</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
