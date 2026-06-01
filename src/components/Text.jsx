/**
 * Text component - Flexible text element with styling options
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content
 * @param {string} [props.size="md"] - Font size: xs, sm, md, lg, xl
 * @param {string} [props.color="default"] - Text color: default, muted, primary, success, danger, white
 * @param {string} [props.weight="normal"] - Font weight
 * @param {React.ElementType} [props.as="p"] - HTML element to render as
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Text element
 */
const Text = ({
  children,
  size = "md",
  color = "default",
  weight = "normal",
  as: Component = "p",
  className = "",
  ...props
}) => {
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const colors = {
    default: "text-slate-600 dark:text-slate-400",
    muted: "text-slate-500 dark:text-slate-500",
    primary: "text-indigo-600 dark:text-indigo-400",
    success: "text-green-600 dark:text-green-400",
    danger: "text-red-600 dark:text-red-400",
    white: "text-white",
  };

  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  return (
    <Component
      className={`
        leading-relaxed
        ${sizes[size]}
        ${colors[color]}
        ${weights[weight]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
