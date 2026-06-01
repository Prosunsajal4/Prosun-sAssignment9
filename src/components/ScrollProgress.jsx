import { useEffect, useState } from "react";

const ScrollProgress = ({
  color = "indigo",
  height = 3,
  className = "",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colors = {
    indigo: "bg-indigo-600",
    blue: "bg-blue-600",
    green: "bg-green-500",
    purple: "bg-purple-600",
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className={`h-${height} ${colors[color]} transition-all duration-100`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
