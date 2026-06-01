/**
 * Heading component - Semantic HTML heading with flexible sizing and styling
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Heading text content
 * @param {number} [props.level=2] - HTML heading level (1-6): h1-h6
 * @param {string} [props.size] - Font size override
 * @param {boolean} [props.gradient=false] - Apply gradient styling
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Heading element
 */
const Heading = ({
  children,
  level = 2,
  size,
  gradient = false,
  className = "",
  ...props
}) => {
  const Tag = `h${level}`;

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const defaultSizes = {
    1: "text-4xl",
    2: "text-2xl",
    3: "text-xl",
    4: "text-lg",
    5: "text-base",
    6: "text-sm",
  };

  return (
    <Tag
      className={`
        font-bold text-slate-900 dark:text-white
        ${gradient ? "gradient-text" : ""}
        ${sizes[size] || defaultSizes[level] || "text-2xl"}
        ${className}
      `}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
