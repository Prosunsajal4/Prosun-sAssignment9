export const categoryColors = {
  skills: { bg: "bg-indigo-50", text: "text-indigo-700", darkBg: "dark:bg-indigo-900/30", darkText: "dark:text-indigo-400" },
  design: { bg: "bg-pink-50", text: "text-pink-700", darkBg: "dark:bg-pink-900/30", darkText: "dark:text-pink-400" },
  development: { bg: "bg-green-50", text: "text-green-700", darkBg: "dark:bg-green-900/30", darkText: "dark:text-green-400" },
  marketing: { bg: "bg-amber-50", text: "text-amber-700", darkBg: "dark:bg-amber-900/30", darkText: "dark:text-amber-400" },
  business: { bg: "bg-purple-50", text: "text-purple-700", darkBg: "dark:bg-purple-900/30", darkText: "dark:text-purple-400" },
  wellness: { bg: "bg-teal-50", text: "text-teal-700", darkBg: "dark:bg-teal-900/30", darkText: "dark:text-teal-400" },
};

export const getCategoryColor = (category) => {
  const key = category?.toLowerCase() || "skills";
  return categoryColors[key] || categoryColors.skills;
};
