import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const paths = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Build modern websites and applications with HTML, CSS, JavaScript, and React.",
    tag: "12 courses",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Learn to design intuitive interfaces and delightful user experiences.",
    tag: "8 courses",
    skills: ["Figma", "Prototyping", "Design Systems", "User Research"],
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    description:
      "Master SEO, social media marketing, and online advertising strategies.",
    tag: "6 courses",
    skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
  },
  {
    icon: FaRocket,
    title: "Entrepreneurship",
    description:
      "Turn your ideas into businesses with practical startup and freelancing skills.",
    tag: "5 courses",
    skills: ["Business Planning", "Pitching", "Finance", "Marketing"],
  },
];

const process = [
  {
    step: 1,
    title: "Choose Your Path",
    description: "Browse our curated career tracks and pick the one that matches your goals.",
  },
  {
    step: 2,
    title: "Learn the Skills",
    description: "Follow structured lessons with hands-on projects and real feedback.",
  },
  {
    step: 3,
    title: "Build Your Portfolio",
    description: "Complete capstone projects that showcase your abilities to employers.",
  },
  {
    step: 4,
    title: "Land Your Role",
    description: "Use our career resources and certificates to secure your next opportunity.",
  },
];

const Career = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8 space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Career
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          Grow with real-world skills
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          Explore learning paths that support portfolio building, interview
          readiness, and hands-on experience for your next role.
        </p>
      </div>

      {/* Learning Paths */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Learning Paths
        </h2>
        <div className="mt-6 space-y-4">
          {paths.map(({ icon: Icon, title, description, tag, skills }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-md hover:border-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {title}
                    </h3>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      {tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <FaArrowRight className="hidden sm:block h-5 w-5 text-slate-300 mt-1 group-hover:text-indigo-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works timeline */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Process
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            From learning to landing a role
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {process.map(({ step, title, description }) => (
            <div
              key={step}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-sm font-bold text-white shadow-md">
                {step}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-lg text-center">
        <FaRocket className="mx-auto h-10 w-10 mb-4" />
        <h2 className="text-2xl font-bold">Ready to build your career?</h2>
        <p className="mt-2 max-w-md mx-auto text-sm text-white/80">
          Start with a free course and see how far you can go. No commitment
          required.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          {["Self-paced learning", "Live mentorship", "Job-ready portfolio", "Industry certificates"].map(
            (item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm"
              >
                <FaCheckCircle className="h-3 w-3" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Career;
