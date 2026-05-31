const Sticky = ({
  children,
  top = 0,
  z = "z-10",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`sticky ${z} ${className}`}
      style={{ top: `${top}px` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Sticky;
