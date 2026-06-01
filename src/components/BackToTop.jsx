import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = ({
  showAfter = 300,
  smooth = true,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${className}`}
      aria-label="Back to top"
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
