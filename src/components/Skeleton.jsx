const Skeleton = ({ className = "", variant = "text", count = 1 }) => {
  const variants = {
    text: "h-4 w-full rounded",
    heading: "h-8 w-3/4 rounded",
    avatar: "h-12 w-12 rounded-full",
    card: "h-48 w-full rounded-2xl",
    thumbnail: "h-32 w-full rounded-xl",
    button: "h-10 w-24 rounded-xl",
  };

  return (
    <div className="animate-pulse" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`bg-slate-200 dark:bg-slate-700 ${variants[variant]} ${
            i < count - 1 ? "mb-3" : ""
          } ${className}`}
        />
      ))}
    </div>
  );
};

export default Skeleton;
