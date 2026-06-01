import userDefaultPic from "../assets/user.png";

/**
 * Avatar component - Display user profile picture with optional online indicator
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.src] - Image source URL
 * @param {string} [props.alt="User avatar"] - Image alt text
 * @param {string} [props.size="md"] - Avatar size: xs, sm, md, lg, xl
 * @param {boolean} [props.online=false] - Show online status indicator
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Avatar image
 */
const Avatar = ({
  src,
  alt = "User avatar",
  size = "md",
  online = false,
  className = "",
}) => {
  const sizes = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-20 w-20",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={src || userDefaultPic}
        alt={alt}
        className={`${sizes[size]} rounded-full object-cover ring-2 ring-white dark:ring-slate-900 shadow-sm`}
      />
      {online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-green-400" />
      )}
    </div>
  );
};

export default Avatar;
