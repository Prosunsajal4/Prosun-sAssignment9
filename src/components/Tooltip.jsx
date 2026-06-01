import { useState } from "react";

/**
 * Tooltip component - Informational popup on hover or focus
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Trigger element
 * @param {React.ReactNode} props.content - Tooltip content
 * @param {string} [props.position="top"] - Tooltip position: top, bottom, left, right
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Tooltip wrapper
 */
const Tooltip = ({
  children,
  content,
  position = "top",
  className = "",
}) => {
  const [show, setShow] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && content && (
        <div
          role="tooltip"
          className={`absolute z-50 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg dark:bg-slate-700 ${positions[position]} animate-[fadeIn_150ms_ease-out]`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
