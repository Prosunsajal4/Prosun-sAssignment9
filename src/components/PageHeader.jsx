const PageHeader = ({
  title,
  description,
  badge,
  children,
  centered = true,
  className = "",
}) => {
  return (
    <div className={`py-12 ${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <span className="inline-block mb-3 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
          {badge}
        </span>
      )}
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
