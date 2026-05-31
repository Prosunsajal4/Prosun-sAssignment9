const Divider = ({
  variant = "solid",
  color = "default",
  spacing = "md",
  className = "",
  ...props
}) => {
  const variants = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  const colors = {
    default: "border-slate-200 dark:border-slate-700",
    light: "border-slate-100 dark:border-slate-800",
    accent: "border-indigo-200 dark:border-indigo-800",
  };

  const spacings = {
    sm: "my-4",
    md: "my-6",
    lg: "my-8",
  };

  return (
    <div
      className={`border-t ${variants[variant]} ${colors[color]} ${spacings[spacing]} ${className}`}
      role="separator"
      {...props}
    />
  );
};

export default Divider;
