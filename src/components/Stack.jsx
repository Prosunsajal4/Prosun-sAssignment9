const Stack = ({
  children,
  direction = "vertical",
  spacing = "md",
  align = "stretch",
  justify = "start",
  wrap = false,
  className = "",
  as: Component = "div",
  ...props
}) => {
  const spacings = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  const alignments = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  const justifications = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  return (
    <Component
      className={`
        flex
        ${direction === "vertical" ? "flex-col" : "flex-row"}
        ${spacings[spacing]}
        ${alignments[align]}
        ${justifications[justify]}
        ${wrap ? "flex-wrap" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Stack;
