import { FaBookOpen, FaStar, FaClock, FaBookmark } from "react-icons/fa";

const Addict = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Favorites
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Your learning bookmarks
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Keep track of courses you love, topics you want to explore, and
          skills you&apos;re working on. This is your personal learning space.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: FaBookOpen,
              title: "Currently Learning",
              count: 3,
              description: "Courses you've started but haven't finished yet.",
            },
            {
              icon: FaStar,
              title: "Top Rated",
              count: 5,
              description: "Your highest-rated courses and instructor picks.",
            },
            {
              icon: FaClock,
              title: "Quick Sessions",
              count: 8,
              description: "Short lessons you can complete in under 30 minutes.",
            },
            {
              icon: FaBookmark,
              title: "Saved for Later",
              count: 12,
              description: "Courses bookmarked to explore when you're ready.",
            },
          ].map(({ icon: Icon, title, count, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500">{count} items</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Addict;
