const VisuallyHidden = ({ children, ...props }) => {
  return (
    <span
      className="sr-only"
      {...props}
    >
      {children}
    </span>
  );
};

export default VisuallyHidden;
