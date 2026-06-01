import { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({
  value = 0,
  maxStars = 5,
  size = "md",
  readonly = false,
  onChange,
  showValue = false,
  className = "",
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  const sizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
    xl: "h-6 w-6",
  };

  const displayValue = hoverValue || value;

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} role="group" aria-label={`Rating: ${value} out of ${maxStars} stars`}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;
        const filled = starIndex <= displayValue;
        const halfFilled = !filled && starIndex - 0.5 <= displayValue;

        return (
          <button
            key={i}
            type="button"
            disabled={readonly}
            onClick={() => onChange?.(starIndex)}
            onMouseEnter={() => !readonly && setHoverValue(starIndex)}
            onMouseLeave={() => !readonly && setHoverValue(0)}
            className={`p-0 border-0 bg-transparent ${readonly ? "cursor-default" : "cursor-pointer"} focus-visible:ring-2 focus-visible:ring-indigo-500 rounded`}
            aria-label={`${starIndex} star${starIndex !== 1 ? "s" : ""}`}
          >
            {filled ? (
              <FaStar className={`${sizes[size]} text-yellow-400`} />
            ) : halfFilled ? (
              <FaStarHalfAlt className={`${sizes[size]} text-yellow-400`} />
            ) : (
              <FaRegStar className={`${sizes[size]} text-slate-300 dark:text-slate-600`} />
            )}
          </button>
        );
      })}
      {showValue && (
        <span className="ml-1.5 text-sm text-slate-600 dark:text-slate-400">
          {value.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;
