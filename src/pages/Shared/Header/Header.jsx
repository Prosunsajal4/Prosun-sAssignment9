import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <header className="relative overflow-hidden mb-8" role="banner">
      <div className="hero-heroGradient">
        <div className="max-w-6xl mx-auto text-center text-white py-12 md:py-20 px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Skill is Power
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            Empower yourself through hands-on learning and real-world growth. Find curated providers and practical lessons to level up fast.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/courses" className="inline-block bg-white text-indigo-700 font-semibold px-5 py-2 rounded-lg shadow-sm hover:shadow-md">Explore Courses</a>
            <a href="/register" className="inline-block border border-white text-white px-5 py-2 rounded-lg opacity-90 hover:opacity-100">Become an Instructor</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between mt-6 px-4">
        <div className="flex items-center gap-3">
          <img className="w-12 h-12" src={logo} alt="Esho Shikhi logo" />
          <div>
            <div className="text-sm font-semibold">Esho Shikhi</div>
            <div className="text-xs text-gray-400">Learn Something New Every Day</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a className="text-sm text-gray-600 hover:text-indigo-600" href="/">Home</a>
          <a className="text-sm text-gray-600 hover:text-indigo-600" href="/profile">My Profile</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
