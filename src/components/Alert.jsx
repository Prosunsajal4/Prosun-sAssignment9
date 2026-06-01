import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaTimes } from "react-icons/fa";

const Alert = ({
  type = "info",
  title,
  children,
  closable = false,
  onClose,
  className = "",
}) => {
  const types = {
    info: {
      container: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
      icon: <FaInfoCircle className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
      title: "text-blue-800 dark:text-blue-300",
      text: "text-blue-700 dark:text-blue-400",
      close: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
    },
    success: {
      container: "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
      icon: <FaCheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />,
      title: "text-green-800 dark:text-green-300",
      text: "text-green-700 dark:text-green-400",
      close: "text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
      icon: <FaExclamationTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />,
      title: "text-yellow-800 dark:text-yellow-300",
      text: "text-yellow-700 dark:text-yellow-400",
      close: "text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300",
    },
    error: {
      container: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
      icon: <FaTimesCircle className="h-5 w-5 text-red-500 dark:text-red-400" />,
      title: "text-red-800 dark:text-red-300",
      text: "text-red-700 dark:text-red-400",
      close: "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300",
    },
  };

  const style = types[type];

  return (
    <div
      className={`flex items-start gap-3 rounded-xl border p-4 ${style.container} ${className}`}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={`font-semibold text-sm ${style.title}`}>{title}</h4>
        )}
        {children && (
          <p className={`text-sm mt-1 ${style.text}`}>{children}</p>
        )}
      </div>
      {closable && (
        <button
          onClick={onClose}
          className={`flex-shrink-0 p-1 rounded-lg transition ${style.close} focus-visible:ring-2 focus-visible:ring-indigo-500`}
          aria-label="Dismiss"
        >
          <FaTimes className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
