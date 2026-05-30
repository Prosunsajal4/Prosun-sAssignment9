import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
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
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Stay Connected
        </p>
        <h2 className="mt-2 text-lg font-semibold text-slate-900">Follow Us</h2>
        <div className="mt-3 flex flex-col">
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      <div className="rounded-3xl bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Spotlight</h2>
        <div className="mt-3">
          <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-sm">
            <button
              aria-label="Previous"
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
              onClick={() =>
                setIndex((i) => (i - 1 + slides.length) % slides.length)
              }
            >
              <FaChevronLeft className="h-3.5 w-3.5 text-slate-600" />
            </button>

            <div className="relative h-36 overflow-hidden">
              {slides.map((s, i) => (
                <div
                  key={s.title}
                  className={`absolute inset-0 transition-all duration-300 ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="h-full rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 p-4 text-white">
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="mt-1 text-xs leading-5 opacity-90">
                      {s.body}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-bold">{s.cta}</span>
                      <small className="opacity-80 text-xs">{s.meta}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              aria-label="Next"
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
            >
              <FaChevronRight className="h-3.5 w-3.5 text-slate-600" />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-indigo-600" : "bg-slate-300"
                }`}
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
