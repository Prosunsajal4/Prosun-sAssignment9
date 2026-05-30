import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaStar, FaArrowRight, FaPaperPlane } from "react-icons/fa";

const Home = () => {
  const skills = useLoaderData();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal-on-scroll");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const featured = skills.slice(0, 3);

  return (
    <div>
      <Header />
      <main id="main-content" role="main" className="mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)_320px] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <LeftSideNav />
          </aside>

          <div className="space-y-10">
            {/* Featured Skills */}
            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 reveal-on-scroll">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    Featured
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Top Skills This Week
                  </h2>
                </div>
                <span className="hidden rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 sm:inline-flex">
                  {featured.length} curated picks
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {featured.map((skill) => (
                  <Link
                    key={skill._id}
                    to={`/skill/${encodeURIComponent(skill.title)}`}
                    className="instructor-card overflow-hidden p-0 text-left block"
                  >
                    <div className="relative h-44 bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        src={skill.image_url}
                        alt={skill.title}
                      />
                      <span className="absolute top-3 right-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-indigo-700 backdrop-blur-sm shadow-sm">
                        {skill.price}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-slate-900 leading-snug">
                        {skill.title}
                      </h3>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <FaStar className="h-3.5 w-3.5 text-amber-400" />
                          <span className="text-sm font-semibold text-slate-700">
                            {skill.rating.number}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                          {skill.category_id}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* How it works */}
            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 reveal-on-scroll">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  How it works
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Learn in four simple steps
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  [
                    "Browse Skills",
                    "Explore a wide variety of courses and find the perfect skill to learn.",
                  ],
                  [
                    "Choose a Provider",
                    "Select a top-rated instructor based on reviews and availability.",
                  ],
                  [
                    "Start Learning",
                    "Join live classes or access tutorials at your own pace.",
                  ],
                  [
                    "Get Certified",
                    "Complete the course and receive a certificate to showcase your skills.",
                  ],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:bg-white hover:shadow-md hover:border-indigo-100"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-sm font-bold text-white shadow-md group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <h4 className="text-base font-semibold text-slate-900">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 reveal-on-scroll">
              <div className="mb-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                  Testimonials
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  What our students say
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Trisha Chakrabarti",
                    role: "English Learner",
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                    text: "This course helped me gain confidence in speaking English. Highly recommend!",
                    rating: 5,
                  },
                  {
                    name: "Rahul Das",
                    role: "Web Developer",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    text: "I learned HTML, CSS, and JS from scratch. Now I can build websites easily!",
                    rating: 5,
                  },
                  {
                    name: "Ananya Sen",
                    role: "Yoga Student",
                    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                    text: "The yoga sessions helped me stay relaxed and focus on my studies.",
                    rating: 4,
                  },
                ].map((person) => (
                  <article
                    key={person.name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: person.rating }).map((_, i) => (
                        <FaStar
                          key={i}
                          className="h-3.5 w-3.5 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-6 text-slate-600 italic">
                      &ldquo;{person.text}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-3 pt-4 border-t border-slate-100">
                      <img
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                        src={person.avatar}
                        alt={person.name}
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {person.name}
                        </h4>
                        <p className="text-xs text-slate-500">{person.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter */}
            <section className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-lg reveal-on-scroll">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <FaPaperPlane className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">
                  Stay in the loop
                </h2>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  Get notified about new courses, free workshops, and learning
                  tips. No spam, ever.
                </p>
                <div className="mt-6 flex w-full max-w-sm gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/60 backdrop-blur-sm focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="shrink-0 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-white/90 shadow-md">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24">
            <RightSideNav />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
