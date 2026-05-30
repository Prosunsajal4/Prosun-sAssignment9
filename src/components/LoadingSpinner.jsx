const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-3",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <div
        className={`${sizes[size]} animate-spin rounded-full border-indigo-200 border-t-indigo-600`}
      />
      {text && <p className="text-sm text-slate-500 animate-pulse">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
