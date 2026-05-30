import { useEffect } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
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

  return (
    <div>
      <Header />
      <main id="main-content" role="main" className="mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)_320px] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <LeftSideNav />
          </aside>

          <div className="space-y-10">
            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8 reveal-on-scroll">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                    Featured
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Top Courses This Week
                  </h2>
                </div>
                <span className="hidden rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 sm:inline-flex">
                  3 curated picks
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  {
                    name: "Alex Martin",
                    role: "Beginner Guitar Lessons",
                    avatar:
                      "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
                    rating: 4.8,
                    slots: 3,
                  },
                  {
                    name: "John Ray",
                    role: "Basic Photography Workshop",
                    avatar:
                      "https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg",
                    rating: 4.7,
                    slots: 4,
                  },
                  {
                    name: "Omar Hossain",
                    role: "Creative Writing Workshop",
                    avatar:
                      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
                    rating: 4.9,
                    slots: 4,
                  },
                ].map((ins) => (
                  <article
                    key={ins.name}
                    className="instructor-card overflow-hidden p-0 text-left"
                  >
                    <div className="h-40 bg-slate-100">
                      <img
                        className="h-full w-full object-cover"
                        src={ins.avatar}
                        alt={ins.name}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-900">
                          {ins.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{ins.role}</p>
                      <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm">
                        <span className="font-semibold text-amber-500">
                          {ins.rating} ★
                        </span>
                        <span className="text-slate-500">
                          {ins.slots} slots
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
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
                    "Select a top-rated instructor based on reviews and slots availability.",
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
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 text-sm font-bold text-white">
                      0{index + 1}
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
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                    text: "This course helped me gain confidence in speaking English. Highly recommend!",
                  },
                  {
                    name: "Rahul Das",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    text: "I learned HTML, CSS, and JS from scratch. Now I can build websites easily!",
                  },
                  {
                    name: "Ananya Sen",
                    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                    text: "The yoga sessions helped me stay relaxed and focus on my studies.",
                  },
                ].map((person) => (
                  <article
                    key={person.name}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center"
                  >
                    <img
                      className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-white"
                      src={person.avatar}
                      alt={person.name}
                    />
                    <h4 className="mt-4 text-base font-semibold text-slate-900">
                      {person.name}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {person.text}
                    </p>
                  </article>
                ))}
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
