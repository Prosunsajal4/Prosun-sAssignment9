import { useState, useRef, useEffect } from "react";

const LazyLoad = ({
  children,
  placeholder = null,
  rootMargin = "100px",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyLoad;
