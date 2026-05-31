import { forwardRef } from "react";

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

Form.displayName = "Form";

export default Form;
