import { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const Toast = ({ message, type = "success", duration = 4000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: FaCheckCircle,
    error: FaExclamationCircle,
    info: FaInfoCircle,
  };

  const colors = {
    success: "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400",
    error: "bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400",
    info: "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400",
  };

  const Icon = icons[type];

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`
        flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        ${colors[type]}
      `}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="flex-1">{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="shrink-0 rounded-lg p-1 hover:bg-black/5 dark:hover:bg-white/5"
        aria-label="Dismiss"
      >
        <FaTimes className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default Toast;
