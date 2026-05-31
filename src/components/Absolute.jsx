const Absolute = ({
  children,
  inset = "0",
  className = "",
  ...props
}) => {
  const insetClasses = {
    "0": "inset-0",
    "top-0": "top-0 left-0 right-0",
    "bottom-0": "bottom-0 left-0 right-0",
    "left-0": "top-0 bottom-0 left-0",
    "right-0": "top-0 bottom-0 right-0",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`absolute ${insetClasses[inset] || inset} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Absolute;
