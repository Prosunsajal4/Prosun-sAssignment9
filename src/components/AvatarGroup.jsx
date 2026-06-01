const AvatarGroup = ({
  avatars = [],
  max = 4,
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "h-7 w-7 text-xs",
    md: "h-9 w-9 text-sm",
    lg: "h-11 w-11 text-base",
  };

  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;

  return (
    <div className={`flex items-center -space-x-2 ${className}`} role="group" aria-label={`${avatars.length} members`}>
      {visible.map((avatar, index) => (
        <div
          key={index}
          className={`relative ${sizes[size]} rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden`}
        >
          {avatar.src ? (
            <img
              src={avatar.src}
              alt={avatar.name || ""}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-indigo-500 flex items-center justify-center text-white font-medium">
              {avatar.name?.charAt(0) || "?"}
            </div>
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`relative ${sizes[size]} rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-medium`}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
