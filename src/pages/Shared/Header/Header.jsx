import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="relative overflow-hidden mb-8" role="banner">
      <div className="hero-heroGradient">
        <div className="container-max text-center text-white py-12 md:py-20 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Learn in-demand skills — build real projects
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            Practical, project-driven courses taught by industry practitioners. Join live workshops, earn certificates, and build a portfolio.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/courses"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Browse Courses
            </a>
            <a
              href="/register"
              className="inline-block bg-transparent border border-white/80 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors duration-200"
            >
              Teach a Course
            </a>
          </div>
        </div>
      </div>
      <div className="container-max flex items-center justify-between mt-6 px-4">
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full ring-2 ring-white shadow-md object-cover" src={logo} alt="Esho Shikhi logo" />
          <div>
            <div className="text-sm font-semibold">Esho Shikhi</div>
            <div className="text-xs text-gray-400">
              Learn Something New Every Day
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a className="text-sm text-gray-600 hover:text-indigo-600" href="/">
            Home
          </a>
          <a
            className="text-sm text-gray-600 hover:text-indigo-600"
            href="/profile"
          >
            My Profile
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
