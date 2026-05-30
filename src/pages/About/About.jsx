import {
  FaUsers,
  FaLightbulb,
  FaAward,
  FaHeart,
  FaRocket,
  FaCheck,
} from "react-icons/fa";

const team = [
  {
    name: "Sakibul Hassan",
    role: "Founder & Lead Instructor",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Passionate about making quality education accessible to everyone.",
  },
  {
    name: "Nusrat Jahan",
    role: "Head of Curriculum",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Designs learning paths that connect theory with real-world projects.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Community Manager",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Builds and nurtures our growing community of learners.",
  },
];

const values = [
  {
    icon: FaUsers,
    title: "Community Driven",
    description:
      "Learn alongside a community of motivated students and experienced instructors.",
  },
  {
    icon: FaLightbulb,
    title: "Project-Based",
    description:
      "Every course is built around real projects so you learn by doing, not just watching.",
  },
  {
    icon: FaAward,
    title: "Certified",
    description:
      "Complete courses and earn certificates to showcase your new skills.",
  },
  {
    icon: FaHeart,
    title: "Accessible",
    description:
      "Courses designed for all levels, from absolute beginners to advanced learners.",
  },
];

const milestones = [
  { year: "2023", event: "Platform launched with 5 courses" },
  { year: "2024", event: "Reached 1,000 active students" },
  { year: "2025", event: "Expanded to 50+ courses across 8 categories" },
  { year: "2026", event: "Launched live workshop feature" },
];

const About = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8 space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          About
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Built for practical learning
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Esho Shikhi is a learning platform focused on live, project-driven
          lessons. We connect students with trusted instructors and provide a
          clean path from browsing to enrollment.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Our Journey
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          Milestones
        </h2>
        <div className="mt-8 space-y-6">
          {milestones.map(({ year, event }, i) => (
            <div key={year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-sm font-bold text-white shadow-md">
                  {year.slice(2)}
                </div>
                {i < milestones.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-slate-200" />
                )}
              </div>
              <div className="pb-6">
                <p className="text-sm font-semibold text-indigo-600">{year}</p>
                <p className="mt-1 text-sm text-slate-600">{event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Team
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Meet the people behind Esho Shikhi
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map(({ name, role, avatar, bio }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:bg-white hover:shadow-md"
            >
              <img
                className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-md"
                src={avatar}
                alt={name}
              />
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {name}
              </h3>
              <p className="mt-1 text-xs font-medium text-indigo-600">
                {role}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">{bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why choose us */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-lg">
        <div className="flex flex-col items-center text-center">
          <FaRocket className="h-10 w-10 mb-4" />
          <h2 className="text-2xl font-bold">Ready to start learning?</h2>
          <p className="mt-2 max-w-md text-sm text-white/80">
            Join thousands of students who are building new skills and advancing
            their careers with Esho Shikhi.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            {["Free courses", "Live workshops", "Expert instructors", "Certificates"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 backdrop-blur-sm"
                >
                  <FaCheck className="h-3 w-3" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
