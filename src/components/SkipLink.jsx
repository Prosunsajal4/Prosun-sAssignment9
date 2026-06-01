import { useEffect, useRef } from "react";

const SkipLink = ({ targetId = "main-content", children = "Skip to content" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab" && !e.shiftKey) {
        const target = document.getElementById(targetId);
        if (target && document.activeElement === ref.current) {
          e.preventDefault();
          target.focus();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    ref.current?.addEventListener("keydown", handleKeyDown);
    return () => ref.current?.removeEventListener("keydown", handleKeyDown);
  }, [targetId]);

  return (
    <a
      ref={ref}
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-lg focus:outline-none"
    >
      {children}
    </a>
  );
};

export default SkipLink;
