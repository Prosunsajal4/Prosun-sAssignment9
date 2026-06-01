import { useState } from "react";

const CategoryFilter = ({
  categories = [],
  selected,
  onChange,
  multiple = false,
  className = "",
}) => {
  const [selectedValues, setSelectedValues] = useState(
    multiple ? (selected || []) : selected ? [selected] : []
  );

  const handleToggle = (value) => {
    if (multiple) {
      const newValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newValues);
      onChange?.(newValues);
    } else {
      const newValue = selectedValues[0] === value ? null : value;
      setSelectedValues(newValue ? [newValue] : []);
      onChange?.(newValue);
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="group" aria-label="Category filter">
      <button
        onClick={() => {
          setSelectedValues([]);
          onChange?.(multiple ? [] : null);
        }}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          selectedValues.length === 0
            ? "bg-indigo-600 text-white"
            : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
        }`}
      >
        All
      </button>
      {categories.map((category) => {
        const value = typeof category === "string" ? category : category.value;
        const label = typeof category === "string" ? category : category.label;
        const isActive = selectedValues.includes(value);

        return (
          <button
            key={value}
            onClick={() => handleToggle(value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
