import Button from "./Button";

const EmptyState = ({
  icon,
  title = "No items found",
  description,
  action,
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      {icon && (
        <div className="mb-4 text-slate-400 dark:text-slate-500 text-5xl">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">
          {description}
        </p>
      )}
      {(action || onAction) && (
        <Button onClick={onAction || action} variant="primary" size="md">
          {actionLabel || "Get Started"}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
