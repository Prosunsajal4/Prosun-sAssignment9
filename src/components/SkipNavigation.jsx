const SkipNavigation = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-xl focus:bg-indigo-600 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <a
        href="#main-nav"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-48 focus:z-[9999] focus:rounded-xl focus:bg-indigo-600 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to navigation
      </a>
    </>
  );
};

export default SkipNavigation;
