import { forwardRef } from "react";

/**
 * Form component - Wrapper for form elements with proper event handling
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Form fields and content
 * @param {Function} [props.onSubmit] - Form submission handler
 * @param {string} [props.className=""] - Additional CSS classes
 * @returns {React.ReactElement} Form element
 */
const Form = forwardRef(
  ({ children, onSubmit, className = "", ...props }, ref) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit?.(e);
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={`space-y-5 ${className}`}
        noValidate
        {...props}
      >
        {children}
      </form>
    );
  }
);

// Display name for debugging purposes
Form.displayName = "Form";

export default Form;
