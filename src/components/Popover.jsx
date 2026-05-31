import { useState, useRef, useEffect } from "react";

const Popover = ({
  trigger,
  content,
  position = "bottom",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={popoverRef} className={`relative inline-block ${className}`}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className={`absolute z-50 min-w-[200px] rounded-xl bg-white p-4 shadow-xl dark:bg-slate-900 ${positions[position]} animate-[fadeIn_150ms_ease-out]`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
