const Center = ({
  children,
  minH = false,
  p = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        flex items-center justify-center
        ${minH ? "min-h-[40vh]" : ""}
        ${p ? "p-8" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Center;
