import { createContext, useContext, useState, useEffect } from "react";

const DashboardContext = createContext(null);

const DashboardProvider = ({ children }) => {
  const [enrolled, setEnrolled] = useState(() => {
    try {
      const saved = localStorage.getItem("esho-enrolled");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("esho-bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("esho-enrolled", JSON.stringify(enrolled));
  }, [enrolled]);

  useEffect(() => {
    localStorage.setItem("esho-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const enrollSkill = (skill) => {
    if (!enrolled.find((s) => s._id === skill._id)) {
      setEnrolled((prev) => [
        ...prev,
        { ...skill, enrolledAt: new Date().toISOString(), progress: 0 },
      ]);
    }
  };

  const isEnrolled = (skillId) => {
    return enrolled.some((s) => s._id === skillId);
  };

  const toggleBookmark = (skill) => {
    setBookmarks((prev) => {
      const exists = prev.find((s) => s._id === skill._id);
      if (exists) {
        return prev.filter((s) => s._id !== skill._id);
      }
      return [...prev, skill];
    });
  };

  const isBookmarked = (skillId) => {
    return bookmarks.some((s) => s._id === skillId);
  };

  const updateProgress = (skillId, progress) => {
    setEnrolled((prev) =>
      prev.map((s) => (s._id === skillId ? { ...s, progress } : s))
    );
  };

  const removeEnrolled = (skillId) => {
    setEnrolled((prev) => prev.filter((s) => s._id !== skillId));
  };

  const value = {
    enrolled,
    bookmarks,
    enrollSkill,
    isEnrolled,
    toggleBookmark,
    isBookmarked,
    updateProgress,
    removeEnrolled,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

export { DashboardProvider, useDashboard };
export default DashboardContext;
