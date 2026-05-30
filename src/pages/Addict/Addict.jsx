import {
  FaBookOpen,
  FaStar,
  FaClock,
  FaBookmark,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    icon: FaBookOpen,
    title: "Currently Learning",
    count: 3,
    description: "Courses you've started but haven't finished yet.",
    items: [
      { name: "Beginner Guitar", progress: 65 },
      { name: "Web Dev Basics", progress: 40 },
      { name: "Spoken English", progress: 80 },
    ],
  },
  {
    icon: FaStar,
    title: "Top Rated",
    count: 5,
    description: "Your highest-rated courses and instructor picks.",
    items: [
      { name: "Creative Writing", rating: 4.9 },
      { name: "Photography", rating: 4.8 },
      { name: "UI Design", rating: 4.7 },
    ],
  },
  {
    icon: FaClock,
    title: "Quick Sessions",
    count: 8,
    description: "Short lessons you can complete in under 30 minutes.",
    items: [
      { name: "5-min Sketching", time: "12 min" },
      { name: "Quick French", time: "20 min" },
      { name: "Meditation", time: "15 min" },
    ],
  },
  {
    icon: FaBookmark,
    title: "Saved for Later",
    count: 12,
    description: "Courses bookmarked to explore when you're ready.",
    items: [
      { name: "Digital Marketing", category: "Marketing" },
      { name: "Excel Basics", category: "Productivity" },
      { name: "Yoga Flow", category: "Wellness" },
    ],
  },
];

const Addict = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8 space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Favorites
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          Your learning bookmarks
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          Keep track of courses you love, topics you want to explore, and
          skills you&apos;re working on. This is your personal learning space.
        </p>

        {/* Quick stats */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 text-sm">
            <FaBookOpen className="h-4 w-4 text-indigo-600" />
            <span className="font-semibold text-indigo-700">3</span>
            <span className="text-indigo-600">in progress</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2 text-sm">
            <FaStar className="h-4 w-4 text-amber-500" />
            <span className="font-semibold text-amber-700">5</span>
            <span className="text-amber-600">favorites</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 text-sm">
            <FaBookmark className="h-4 w-4 text-emerald-600" />
            <span className="font-semibold text-emerald-700">12</span>
            <span className="text-emerald-600">saved</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      {categories.map(({ icon: Icon, title, count, description, items }) => (
        <div
          key={title}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8 dark:bg-slate-900 dark:ring-slate-800"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {title}
                </h2>
                <p className="text-xs text-slate-500">{count} items</p>
              </div>
            </div>
            <button className="flex items-center gap-1 text-sm font-medium text-indigo-600 transition hover:text-indigo-700">
              View all <FaArrowRight className="h-3 w-3" />
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-500">{description}</p>

          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </h3>
                  {/* Progress bar for Currently Learning */}
                  {item.progress !== undefined && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span>Progress</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {/* Rating for Top Rated */}
                  {item.rating !== undefined && (
                    <div className="mt-1 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(item.rating)
                              ? "text-amber-400"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-xs font-medium text-slate-600">
                        {item.rating}
                      </span>
                    </div>
                  )}
                  {/* Time for Quick Sessions */}
                  {item.time && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <FaClock className="h-3 w-3" />
                      {item.time}
                    </div>
                  )}
                  {/* Category for Saved */}
                  {item.category && (
                    <span className="mt-1 inline-block rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-600">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Addict;
