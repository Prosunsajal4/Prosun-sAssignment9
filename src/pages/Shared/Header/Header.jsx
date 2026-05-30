import { Link } from "react-router-dom";
import { FaUsers, FaBookOpen, FaAward } from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative overflow-hidden rounded-3xl" role="banner">
      <div className="hero-heroGradient">
        {/* Animated floating shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute -right-16 top-1/2 h-48 w-48 rounded-full bg-white/5 animate-[float_8s_ease-in-out_infinite_1s]" />
          <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-white/5 animate-[float_7s_ease-in-out_infinite_2s]" />
        </div>

        <div className="relative text-center text-white py-14 md:py-20 px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            New courses launching every week
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] drop-shadow-lg">
            Learn in-demand skills
          </h1>
          <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Practical, project-driven courses taught by industry practitioners.
            Join live workshops, earn certificates, and build a portfolio.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse Courses
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 border border-white/60 text-white px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/15 hover:border-white/80"
            >
              Get Started Free
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-center justify-center gap-8 md:gap-12 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <FaUsers className="h-4 w-4" />
              <span><strong className="font-bold">2.5k+</strong> Students</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="h-4 w-4" />
              <span><strong className="font-bold">50+</strong> Courses</span>
            </div>
            <div className="flex items-center gap-2">
              <FaAward className="h-4 w-4" />
              <span><strong className="font-bold">100%</strong> Certified</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
