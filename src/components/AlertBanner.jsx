import { useState } from "react";
import { FaTimes, FaInfoCircle, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";

const AlertBanner = ({
  type = "info",
  message,
  action,
  actionLabel,
  dismissible = true,
  className = "",
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const types = {
    info: {
      bg: "bg-indigo-600",
      icon: <FaInfoCircle className="h-4 w-4" />,
    },
    warning: {
      bg: "bg-yellow-500",
      icon: <FaExclamationTriangle className="h-4 w-4" />,
    },
    success: {
      bg: "bg-green-500",
      icon: <FaCheckCircle className="h-4 w-4" />,
    },
  };

  const style = types[type];

  return (
    <div
      className={`flex items-center justify-center gap-3 px-4 py-2.5 text-sm text-white ${style.bg} ${className}`}
      role="banner"
    >
      <span className="flex items-center gap-2">
        {style.icon}
        <span>{message}</span>
      </span>
      <div className="flex items-center gap-2">
        {action && (
          <button
            onClick={action}
            className="rounded-lg bg-white/20 px-3 py-1 text-xs font-semibold hover:bg-white/30 transition"
          >
            {actionLabel}
          </button>
        )}
        {dismissible && (
          <button
            onClick={() => setVisible(false)}
            className="rounded-lg p-1 hover:bg-white/20 transition"
            aria-label="Dismiss"
          >
            <FaTimes className="h-3 w-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertBanner;
