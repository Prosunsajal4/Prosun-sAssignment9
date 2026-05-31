import { useState, useEffect } from "react";

const MediaQuery = ({ query, children, fallback = null }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches ? children : fallback;
};

export const Desktop = ({ children, fallback = null }) => (
  <MediaQuery query="(min-width: 1024px)" fallback={fallback}>
    {children}
  </MediaQuery>
);

export const Mobile = ({ children, fallback = null }) => (
  <MediaQuery query="(max-width: 767px)" fallback={fallback}>
    {children}
  </MediaQuery>
);

export const Tablet = ({ children, fallback = null }) => (
  <MediaQuery query="(min-width: 768px) and (max-width: 1023px)" fallback={fallback}>
    {children}
  </MediaQuery>
);

export default MediaQuery;
