/**
 * Progress component - Visual progress indicator with percentage
 * @component
 * @param {Object} props - Component props
 * @param {number} [props.value=0] - Current progress value
 * @param {number} [props.max=100] - Maximum progress value
 * @param {string} [props.size="md"] - Progress bar size: sm, md, lg
 * @param {boolean} [props.showLabel=false] - Display percentage label
 * @param {string} [props.variant="default"] - Color variant: default, success, warning, danger
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Progress bar
 */
const Progress = ({
  value = 0,
  max = 100,
  size = "md",
  showLabel = false,
  variant = "default",
  className = "",
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variants = {
    default: "from-indigo-600 to-pink-500",
    success: "from-green-500 to-emerald-500",
    warning: "from-amber-500 to-orange-500",
    danger: "from-red-500 to-rose-500",
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Progress</span>
          <span className="font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div
        className={`w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700 ${sizes[size]}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`${Math.round(percentage)}% complete`}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${variants[variant]} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
