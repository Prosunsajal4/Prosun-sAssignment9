import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

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

const RightSideNav = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <aside className="space-y-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
      {/* Social */}
      <div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">Follow Us</h2>
        <div className="mt-3 flex gap-2">
          {[
            { icon: FaFacebook, label: "Facebook", href: "https://facebook.com", color: "hover:bg-blue-50 hover:text-blue-600" },
            { icon: FaTwitter, label: "Twitter", href: "https://twitter.com", color: "hover:bg-sky-50 hover:text-sky-600" },
            { icon: FaInstagram, label: "Instagram", href: "https://instagram.com", color: "hover:bg-pink-50 hover:text-pink-600" },
          ].map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition dark:bg-slate-800 dark:text-slate-400 ${color}`}
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Spotlight */}
      <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">Spotlight</h2>
        <div className="mt-3">
          <div className="relative overflow-hidden rounded-xl bg-white p-3 shadow-sm">
            <button
              aria-label="Previous"
              className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white hover:shadow-md"
              onClick={() =>
                setIndex((i) => (i - 1 + slides.length) % slides.length)
              }
            >
              <FaChevronLeft className="h-3 w-3 text-slate-600" />
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
                  <div className="h-full rounded-lg bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 text-white">
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="mt-1 text-xs leading-5 opacity-90">
                      {s.body}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-lg bg-white/20 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
                        {s.cta}
                      </span>
                      <small className="opacity-80 text-xs">{s.meta}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              aria-label="Next"
              className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white hover:shadow-md"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
            >
              <FaChevronRight className="h-3 w-3 text-slate-600" />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-300"
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
