/**
 * Radio component - Accessible radio button input with optional label
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - Radio button group name
 * @param {string|number} props.value - Radio button value
 * @param {boolean} [props.checked=false] - Radio state
 * @param {Function} [props.onChange] - Change handler
 * @param {string} [props.label] - Display label
 * @param {boolean} [props.disabled=false] - Disable radio
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Radio input with label
 */
const Radio = ({
  name,
  value,
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <label
      className={`inline-flex items-center gap-3 cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only peer"
      />
      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-300 peer-checked:border-indigo-600 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2 transition dark:border-slate-600 dark:peer-checked:border-indigo-400">
        {checked && (
          <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
        )}
      </span>
      {label && <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>}
    </label>
  );
};

export default Radio;
