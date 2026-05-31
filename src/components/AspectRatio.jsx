const AspectRatio = ({
  children,
  ratio = "16/9",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AspectRatio;
