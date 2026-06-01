const Skeleton = ({
  width,
  height = "1rem",
  rounded = "md",
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-700 rounded-${rounded} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
};

const SkeletonText = ({ lines = 3, className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          height="0.75rem"
          width={i === lines - 1 ? "60%" : "100%"}
          rounded="sm"
        />
      ))}
    </div>
  );
};

const SkeletonCard = ({ className = "" }) => {
  return (
    <div className={`rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`} aria-hidden="true">
      <Skeleton height="12rem" rounded="none" />
      <div className="p-5 space-y-3">
        <Skeleton height="1.25rem" width="70%" />
        <SkeletonText lines={2} />
        <div className="flex gap-2">
          <Skeleton height="1.5rem" width="4rem" rounded="full" />
          <Skeleton height="1.5rem" width="4rem" rounded="full" />
        </div>
      </div>
    </div>
  );
};

const SkeletonAvatar = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  return (
    <Skeleton
      height={sizes[size].split(" ")[0]}
      width={sizes[size].split(" ")[1]}
      rounded="full"
      className={className}
    />
  );
};

export { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar };
export default Skeleton;
