import Button from "./Button";

const HeroSection = ({
  title,
  highlightedWord,
  description,
  primaryAction,
  primaryLabel,
  secondaryAction,
  secondaryLabel,
  badge,
  className = "",
}) => {
  return (
    <section className={`relative overflow-hidden py-20 ${className}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-900/20" />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        {badge && (
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
            {badge}
          </span>
        )}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          {title}{" "}
          {highlightedWord && (
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {highlightedWord}
            </span>
          )}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryAction && (
            <Button onClick={primaryAction} size="lg">
              {primaryLabel || "Get Started"}
            </Button>
          )}
          {secondaryAction && (
            <Button onClick={secondaryAction} size="lg" variant="outline">
              {secondaryLabel || "Learn More"}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
