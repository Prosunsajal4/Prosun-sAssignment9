import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative overflow-hidden rounded-3xl" role="banner">
      <div className="hero-heroGradient">
        <div className="text-center text-white py-12 md:py-16 px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            Learn in-demand skills
          </h1>
          <p className="mt-4 text-base md:text-lg opacity-90 max-w-xl mx-auto">
            Practical, project-driven courses taught by industry practitioners.
            Join live workshops, earn certificates, and build a portfolio.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Browse Courses
            </Link>
            <Link
              to="/register"
              className="inline-block border border-white/60 text-white px-6 py-3 rounded-xl transition-colors duration-200 hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
