import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const RightSideNav = () => {
  const slides = [
    {
      title: "Popular Skill: UI Design",
      body: "Quick hands-on sessions to build modern interfaces.",
      cta: "Explore",
      meta: "12 courses",
    },
    {
      title: "Live Workshops",
      body: "Join small-group live lessons with top instructors.",
      cta: "Join Now",
      meta: "Next: Tomorrow",
    },
    {
      title: "Certificate Tracks",
      body: "Complete projects and get a sharable certification.",
      cta: "Start",
      meta: "4 weeks",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <aside className="space-y-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Join Now
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">Login</h2>
        </div>
        <button className="btn btn-outline w-full justify-start gap-2 rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
        <button className="btn btn-outline w-full justify-start gap-2 rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50">
          <FaGithub />
          <span>Continue with GitHub</span>
        </button>
      </div>
      <div className="rounded-3xl bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Follow</h2>
        <div className="mt-3 flex flex-col">
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      {/* interactive spotlight (replaces Q Zone) */}
      <div className="space-y-3 rounded-3xl bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Spotlight</h2>

        <div className="mt-3">
          <div className="carousel relative overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
            <button
              aria-label="Previous"
              className="carousel-btn left"
              onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-track h-36">
              {slides.map((s, i) => (
                <div
                  key={s.title}
                  className={`slide ${i === index ? "active" : ""}`}
                  aria-hidden={i === index ? "false" : "true"}
                >
                  <div className="h-full w-full rounded-lg p-4">
                    <div className="h-full rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 p-4 text-white">
                      <h3 className="text-sm font-semibold">{s.title}</h3>
                      <p className="mt-1 text-xs leading-5 opacity-90">{s.body}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-bold">{s.cta}</span>
                        <small className="opacity-80 text-xs">{s.meta}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              aria-label="Next"
              className="carousel-btn right"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-indigo-600" : "bg-slate-300"}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSideNav;
