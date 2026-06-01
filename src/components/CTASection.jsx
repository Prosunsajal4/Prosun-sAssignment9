import Button from "./Button";

const CTASection = ({
  title = "Ready to get started?",
  description = "Join thousands of learners and start your journey today.",
  actionLabel = "Get Started",
  onAction,
  secondaryLabel,
  onSecondaryAction,
  className = "",
}) => {
  return (
    <section className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 sm:p-12 text-center ${className}`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {title}
        </h2>
        <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={onAction} size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 border-0 shadow-lg">
            {actionLabel}
          </Button>
          {secondaryLabel && (
            <Button onClick={onSecondaryAction} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
