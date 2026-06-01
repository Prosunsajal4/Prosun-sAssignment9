const ProgressRing = ({
  value = 0,
  max = 100,
  size = 80,
  strokeWidth = 8,
  showLabel = true,
  color = "indigo",
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  const colors = {
    indigo: "stroke-indigo-600",
    green: "stroke-green-500",
    red: "stroke-red-500",
    yellow: "stroke-yellow-500",
    blue: "stroke-blue-500",
    purple: "stroke-purple-500",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={`${Math.round((value / max) * 100)}%`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-200 dark:stroke-slate-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className={`${colors[color]} transition-all duration-500`}
        />
      </svg>
      {showLabel && (
        <span className="absolute text-sm font-semibold text-slate-700 dark:text-slate-300">
          {Math.round((value / max) * 100)}%
        </span>
      )}
    </div>
  );
};

export default ProgressRing;
