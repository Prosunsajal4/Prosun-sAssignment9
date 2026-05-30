import { FaUsers, FaLightbulb, FaAward, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <main id="main-content" className="mx-auto max-w-4xl py-8">
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
          {[
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
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
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
    </main>
  );
};

export default About;
