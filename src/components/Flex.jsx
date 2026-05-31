const Flex = ({
  children,
  direction = "row",
  align = "center",
  justify = "start",
  wrap = false,
  gap = "md",
  className = "",
  ...props
}) => {
  const directions = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const alignments = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifications = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const gaps = {
    none: "gap-0",
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  return (
    <div
      className={`
        flex
        ${directions[direction]}
        ${alignments[align]}
        ${justifications[justify]}
        ${wrap ? "flex-wrap" : ""}
        ${gaps[gap]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
