import { FaCheck } from "react-icons/fa";

const TimelineItem = ({ title, description, date, icon, active = false, completed = false }) => {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
            completed
              ? "border-green-500 bg-green-500 text-white"
              : active
              ? "border-indigo-500 bg-indigo-500 text-white"
              : "border-slate-300 bg-white text-slate-400 dark:border-slate-600 dark:bg-slate-800"
          }`}
        >
          {completed ? (
            <FaCheck className="h-4 w-4" />
          ) : icon ? (
            icon
          ) : (
            <div className="h-3 w-3 rounded-full bg-current" />
          )}
        </div>
        <div className="w-0.5 flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />
      </div>
      <div className="flex-1 pb-2">
        <h4
          className={`font-semibold text-sm ${
            active || completed
              ? "text-slate-900 dark:text-white"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {title}
        </h4>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {description}
          </p>
        )}
        {date && (
          <time className="text-xs text-slate-400 dark:text-slate-500 mt-1 block">
            {date}
          </time>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items = [], className = "" }) => {
  return (
    <div className={className} role="list" aria-label="Timeline">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export { TimelineItem };
export default Timeline;
