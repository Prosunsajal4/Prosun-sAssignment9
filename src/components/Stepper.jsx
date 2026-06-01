import { FaCheck } from "react-icons/fa";

const Stepper = ({ steps = [], currentStep = 0, className = "" }) => {
  return (
    <nav className={`flex items-center ${className}`} aria-label="Progress">
      {steps.map((step, index) => {
        const completed = index < currentStep;
        const active = index === currentStep;

        return (
          <div key={index} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
                  completed
                    ? "bg-green-500 text-white"
                    : active
                    ? "bg-indigo-600 text-white ring-4 ring-indigo-100 dark:ring-indigo-900/30"
                    : "bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                }`}
                aria-current={active ? "step" : undefined}
              >
                {completed ? <FaCheck className="h-4 w-4" /> : index + 1}
              </div>
              <span
                className={`text-sm font-medium hidden sm:block ${
                  active || completed
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 w-8 sm:w-12 mx-2 ${
                  completed ? "bg-green-500" : "bg-slate-200 dark:bg-slate-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Stepper;
