import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaArrowUp,
  FaGraduationCap,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white dark:bg-black">
      <div className="container-max mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white">
                <FaGraduationCap className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold">Esho Shikhi</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Learn something new every day with curated lessons and trusted
              instructors.
            </p>
            <div className="mt-4 flex gap-2">
              {[
                { icon: FaFacebook, label: "Facebook", href: "https://facebook.com" },
                { icon: FaTwitter, label: "Twitter", href: "https://twitter.com" },
                { icon: FaInstagram, label: "Instagram", href: "https://instagram.com" },
                { icon: FaGithub, label: "GitHub", href: "https://github.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 transition hover:bg-indigo-600 hover:text-white"
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/career" className="transition hover:text-white">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link to="/addict" className="transition hover:text-white">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Support
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-slate-400">
              Weekly tips and new course alerts.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800/50 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Esho Shikhi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800/50 text-slate-400 transition hover:bg-indigo-600 hover:text-white"
            aria-label="Back to top"
          >
            <FaArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
