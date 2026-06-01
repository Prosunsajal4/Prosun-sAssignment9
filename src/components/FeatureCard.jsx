const FeatureCard = ({
  icon,
  title,
  description,
  variant = "default",
  className = "",
}) => {
  const variants = {
    default: "bg-white dark:bg-slate-800",
    gradient: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
    glass: "bg-white/50 backdrop-blur-sm dark:bg-slate-800/50",
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-slate-700 ${variants[variant]} ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
