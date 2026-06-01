import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./Rating";

const TestimonialCard = ({
  name,
  role,
  avatar,
  content,
  rating = 5,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-white p-6 shadow-sm border border-slate-200 dark:bg-slate-800 dark:border-slate-700 ${className}`}
    >
      <FaQuoteLeft className="absolute top-6 right-6 h-8 w-8 text-indigo-100 dark:text-indigo-900/30" />
      <div className="relative z-10">
        <Rating value={rating} size="sm" className="mb-4" />
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          &ldquo;{content}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-indigo-500 flex items-center justify-center text-white font-medium">
            {avatar ? (
              <img src={avatar} alt={name} className="h-full w-full object-cover" />
            ) : (
              name?.charAt(0)
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              {name}
            </h4>
            {role && (
              <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
