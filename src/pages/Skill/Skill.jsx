import { useContext, useState } from "react";
import { useLoaderData, useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useDashboard } from "../../providers/DashboardProvider";
import { getCategoryColor } from "../../utils/categoryColors";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {
  FaStar,
  FaArrowLeft,
  FaShareAlt,
  FaHeart,
  FaClock,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const Skill = () => {
  const { id } = useParams();
  const skills = useLoaderData();
  const { user } = useContext(AuthContext);
  const { enrollSkill, isEnrolled, toggleBookmark, isBookmarked } =
    useDashboard();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  if (!skills || skills.length === 0) {
    return (
      <main id="main-content" className="py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
          <p className="mt-4 text-sm text-slate-500">Loading skill data...</p>
        </div>
      </main>
    );
  }

  const skill = skills.find(
    (s) => s.title === decodeURIComponent(id)
  ) || skills[0];

  const related = skills.filter((s) => s._id !== skill._id).slice(0, 3);
  const alreadyEnrolled = isEnrolled(skill._id);
  const bookmarked = isBookmarked(skill._id);

  const handleEnroll = () => {
    if (!user) {
      navigate("/login", { state: `/skill/${encodeURIComponent(skill.title)}` });
      return;
    }
    if (!alreadyEnrolled) {
      enrollSkill(skill);
      setShowSuccess(true);
    }
  };

  return (
    <main id="main-content" className="py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            Back to skills
          </Link>

          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden">
            <div className="relative h-72 sm:h-80 bg-slate-100">
              <img
                src={skill.image_url}
                alt={skill.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-indigo-700 backdrop-blur-sm mb-2">
                  {skill.price}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {skill.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(skill.category_id).bg} ${getCategoryColor(skill.category_id).text} ${getCategoryColor(skill.category_id).darkBg} ${getCategoryColor(skill.category_id).darkText}`}>
                  {skill.category_id}
                </span>
                <div className="flex items-center gap-1">
                  <FaStar className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-sm font-semibold text-slate-700">
                    {skill.rating.number}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <FaUsers className="h-3.5 w-3.5" />
                  <span>128 enrolled</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <FaClock className="h-3.5 w-3.5" />
                  <span>4 weeks</span>
                </div>
              </div>

              <p className="text-base leading-7 text-slate-600">
                {skill.details}
              </p>

              {/* Enroll success message */}
              {showSuccess && alreadyEnrolled && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                  <FaCheckCircle className="h-5 w-5 text-green-500" />
                  <span>
                    <strong>Enrolled successfully!</strong> Check your{" "}
                    <Link to="/dashboard" className="underline font-semibold">
                      dashboard
                    </Link>{" "}
                    to start learning.
                  </span>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {alreadyEnrolled ? (
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600 shadow-md"
                  >
                    <FaCheckCircle className="h-4 w-4" />
                    Go to Dashboard
                  </Link>
                ) : (
                  <button
                    onClick={handleEnroll}
                    className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-md hover:shadow-lg"
                  >
                    Enroll Now
                  </button>
                )}
                <button
                  onClick={() => toggleBookmark(skill)}
                  className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    bookmarked
                      ? "border-pink-200 bg-pink-50 text-pink-600"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <FaHeart
                    className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`}
                  />
                  {bookmarked ? "Saved" : "Save"}
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300">
                  <FaShareAlt className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Related Skills
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((s) => (
                  <Link
                    key={s._id}
                    to={`/skill/${encodeURIComponent(s.title)}`}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="h-28 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={s.image_url}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-900 line-clamp-2">
                      {s.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-indigo-600">
                        {s.price}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <FaStar className="h-3 w-3 text-amber-400" />
                        {s.rating.number}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <aside className="lg:sticky lg:top-24">
          <RightSideNav />
        </aside>
      </div>
    </main>
  );
};

export default Skill;
