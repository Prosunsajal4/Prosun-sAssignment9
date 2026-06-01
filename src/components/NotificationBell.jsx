import { useState } from "react";
import { FaBell, FaTimes } from "react-icons/fa";
import ClickOutside from "./ClickOutside";

const NotificationBell = ({ notifications = [], className = "" }) => {
  const [open, setOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <ClickOutside onClick={() => setOpen(false)} className={`relative inline-block ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-label={`Notifications${unread > 0 ? `, ${unread} unread` : ""}`}
        aria-expanded={open}
      >
        <FaBell className="h-5 w-5" />
        {unread > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white">Notifications</h3>
            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Close"
            >
              <FaTimes className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
                No notifications
              </p>
            ) : (
              notifications.slice(0, 5).map((notification, index) => (
                <div
                  key={index}
                  className={`border-b border-slate-50 px-4 py-3 dark:border-slate-700/50 ${
                    !notification.read ? "bg-indigo-50/50 dark:bg-indigo-900/10" : ""
                  }`}
                >
                  <p className="text-sm text-slate-700 dark:text-slate-300">{notification.message}</p>
                  <p className="mt-1 text-xs text-slate-400">{notification.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </ClickOutside>
  );
};

export default NotificationBell;
