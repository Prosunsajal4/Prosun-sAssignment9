import { FaTimes } from "react-icons/fa";
import FocusTrap from "./FocusTrap";

const Sidebar = ({
  open,
  onClose,
  position = "left",
  title,
  children,
  className = "",
}) => {
  const positions = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={`fixed top-0 ${positions[position]} z-50 h-full w-80 bg-white shadow-xl transition-transform duration-300 dark:bg-slate-900 ${
          open ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"
        } ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={title || "Sidebar"}
      >
        <FocusTrap active={open}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition"
                aria-label="Close sidebar"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {children}
            </div>
          </div>
        </FocusTrap>
      </div>
    </>
  );
};

export default Sidebar;
