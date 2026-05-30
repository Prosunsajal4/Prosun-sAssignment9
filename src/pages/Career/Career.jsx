import { FaCode, FaPalette, FaChartLine, FaRocket } from "react-icons/fa";

const Career = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8">
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Career
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Grow with real-world skills
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Explore learning paths that support portfolio building, interview
          readiness, and hands-on experience for your next role.
        </p>

        <div className="mt-10 space-y-4">
          {[
            {
              icon: FaCode,
              title: "Web Development",
              description:
                "Build modern websites and applications with HTML, CSS, JavaScript, and React.",
              tag: "12 courses",
            },
            {
              icon: FaPalette,
              title: "UI/UX Design",
              description:
                "Learn to design intuitive interfaces and delightful user experiences.",
              tag: "8 courses",
            },
            {
              icon: FaChartLine,
              title: "Digital Marketing",
              description:
                "Master SEO, social media marketing, and online advertising strategies.",
              tag: "6 courses",
            },
            {
              icon: FaRocket,
              title: " entrepreneurship",
              description:
                "Turn your ideas into businesses with practical startup and freelancing skills.",
              tag: "5 courses",
            },
          ].map(({ icon: Icon, title, description, tag }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-white hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
                    {tag}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Career;
