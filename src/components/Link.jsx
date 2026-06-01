import { Link as RouterLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

/**
 * Link component - Navigation link with internal/external support
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Link text/content
 * @param {string} props.to - Link destination URL or route
 * @param {boolean} [props.external=false] - Open in new tab if external
 * @param {boolean} [props.underline=false] - Show underline decoration
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Link element
 */
const Link = ({
  children,
  to,
  external = false,
  underline = false,
  className = "",
  ...props
}) => {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 transition ${
          underline ? "underline underline-offset-2" : ""
        } text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 ${className}`}
        {...props}
      >
        {children}
        <FaExternalLinkAlt className="h-3 w-3" />
      </a>
    );
  }

  return (
    <RouterLink
      to={to}
      className={`transition ${
        underline ? "underline underline-offset-2" : ""
      } text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 ${className}`}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
