/**
 * Card component - Container for content with flexible styling
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.variant="default"] - Card style: default, bordered, elevated
 * @param {string} [props.padding="md"] - Card padding: none, sm, md, lg
 * @param {boolean} [props.hover=false] - Enable hover animation
 * @returns {React.ReactElement} Card container
 */
const Card = ({
  children,
  variant = "default",
  padding = "md",
  hover = false,
  className = "",
  ...props
}) => {
  const variants = {
    default: "bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800",
    bordered: "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700",
    elevated: "bg-white dark:bg-slate-900 shadow-md",
  };

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-3xl shadow-sm
        ${variants[variant]}
        ${paddings[padding]}
        ${hover ? "transition-all hover:shadow-md hover:-translate-y-1" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader - Header section for Card component
 * @component
 * @param {React.ReactNode} children - Header content
 * @param {string} [className=""] - Additional CSS classes
 * @returns {React.ReactElement} Card header
 */
const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

/**
 * CardTitle - Title for Card component
 * @component
 * @param {React.ReactNode} children - Title text
 * @param {string} [className=""] - Additional CSS classes
 * @returns {React.ReactElement} Card title
 */
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-slate-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

/**
 * CardDescription - Description text for Card component
 * @component
 * @param {React.ReactNode} children - Description text
 * @param {string} [className=""] - Additional CSS classes
 * @returns {React.ReactElement} Card description
 */
const CardDescription = ({ children, className = "" }) => (
  <p className={`mt-1 text-sm text-slate-500 dark:text-slate-400 ${className}`}>
    {children}
  </p>
);

/**
 * CardContent - Content section for Card component
 * @component
 * @param {React.ReactNode} children - Content
 * @param {string} [className=""] - Additional CSS classes
 * @returns {React.ReactElement} Card content
 */
const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);

/**
 * CardFooter - Footer section for Card component
 * @component
 * @param {React.ReactNode} children - Footer content
 * @param {string} [className=""] - Additional CSS classes
 * @returns {React.ReactElement} Card footer
 */
const CardFooter = ({ children, className = "" }) => (
  <div className={`mt-4 flex items-center ${className}`}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
