import { useState } from "react";

/**
 * Toggle component - Switch component for boolean state
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.checked=false] - Toggle state
 * @param {Function} [props.onChange] - Change handler
 * @param {string} [props.label] - Display label
 * @param {boolean} [props.disabled=false] - Disable toggle
 * @param {string} [props.size="md"] - Toggle size: sm, md, lg
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Toggle switch
 */
const Toggle = ({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = "md",
  className = "",
}) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  const sizes = {
    sm: "w-9 h-5",
    md: "w-11 h-6",
    lg: "w-14 h-7",
  };

  const dotSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4.5 h-4.5",
    lg: "w-5.5 h-5.5",
  };

  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      <button
        role="switch"
        aria-checked={isOn}
        aria-label={label}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex shrink-0 rounded-full transition-colors duration-200 ease-in-out
          ${sizes[size]}
          ${isOn ? "bg-indigo-600" : "bg-slate-300 dark:bg-slate-600"}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out
            ${dotSizes[size]}
            ${isOn ? "translate-x-5" : "translate-x-0.5"}
            ${size === "lg" ? (isOn ? "translate-x-7" : "translate-x-1") : ""}
            ${size === "sm" ? (isOn ? "translate-x-4" : "translate-x-0.5") : ""}
          `}
          style={{ marginTop: "2px" }}
        />
      </button>
      {label && <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>}
    </label>
  );
};

export default Toggle;
