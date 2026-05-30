import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useDashboard } from "../../providers/DashboardProvider";
import {
  FaBookOpen,
  FaHeart,
  FaCog,
  FaStar,
  FaTrash,
  FaPlay,
  FaCheckCircle,
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { enrolled, bookmarks, removeEnrolled, toggleBookmark } =
    useDashboard();
  const [activeTab, setActiveTab] = useState("enrolled");

  const tabs = [
    { id: "enrolled", label: "My Courses", icon: FaBookOpen, count: enrolled.length },
    { id: "bookmarks", label: "Saved", icon: FaHeart, count: bookmarks.length },
    { id: "settings", label: "Settings", icon: FaCog },
  ];

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <main id="main-content" className="mx-auto max-w-5xl py-8">
      {/* Profile header */}
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={user?.photoURL || "https://randomuser.me/api/portraits/lego/1.jpg"}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover ring-4 ring-indigo-100 shadow-md"
            />
            <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white bg-green-400" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-xl font-bold text-slate-900">
              {user?.displayName || "Student"}
            </h1>
            <p className="mt-1 flex items-center justify-center sm:justify-start gap-1 text-sm text-slate-500">
              <FaEnvelope className="h-3.5 w-3.5" />
              {user?.email || "No email"}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
          >
            <FaSignOutAlt className="h-4 w-4" />
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">
              {enrolled.length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Enrolled</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-500">
              {bookmarks.length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-500">
              {enrolled.length > 0
                ? Math.round(
                    enrolled.reduce((acc, s) => acc + (s.progress || 0), 0) /
                      enrolled.length
                  )
                : 0}
              %
            </p>
            <p className="text-xs text-slate-500 mt-1">Avg Progress</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {tabs.map(({ id, label, icon: Icon, count }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              activeTab === id
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-50 ring-1 ring-slate-100"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
            {count !== undefined && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  activeTab === id
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {/* Enrolled Courses */}
        {activeTab === "enrolled" && (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">My Courses</h2>
            {enrolled.length === 0 ? (
              <div className="mt-8 text-center py-12">
                <FaBookOpen className="mx-auto h-12 w-12 text-slate-300" />
                <p className="mt-4 text-sm text-slate-500">
                  You haven&apos;t enrolled in any courses yet.
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <FaPlay className="h-3.5 w-3.5" />
                  Browse Skills
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {enrolled.map((skill) => (
                  <div
                    key={skill._id}
                    className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-sm"
                  >
                    <div className="h-32 sm:h-24 sm:w-32 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={skill.image_url}
                        alt={skill.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to={`/skill/${encodeURIComponent(skill.title)}`}
                            className="text-base font-semibold text-slate-900 hover:text-indigo-600 transition"
                          >
                            {skill.title}
                          </Link>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                              {skill.category_id}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <FaStar className="h-3 w-3 text-amber-400" />
                              {skill.rating.number}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeEnrolled(skill._id)}
                          className="shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                          title="Remove"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                          <span>Progress</span>
                          <span>{skill.progress || 0}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 transition-all duration-500"
                            style={{ width: `${skill.progress || 0}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bookmarks */}
        {activeTab === "bookmarks" && (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">Saved Skills</h2>
            {bookmarks.length === 0 ? (
              <div className="mt-8 text-center py-12">
                <FaHeart className="mx-auto h-12 w-12 text-slate-300" />
                <p className="mt-4 text-sm text-slate-500">
                  You haven&apos;t saved any skills yet.
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <FaPlay className="h-3.5 w-3.5" />
                  Browse Skills
                </Link>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bookmarks.map((skill) => (
                  <div
                    key={skill._id}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="h-32 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={skill.image_url}
                        alt={skill.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 flex items-start justify-between">
                      <div className="min-w-0 flex-1">
                        <Link
                          to={`/skill/${encodeURIComponent(skill.title)}`}
                          className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition line-clamp-1"
                        >
                          {skill.title}
                        </Link>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="text-sm font-bold text-indigo-600">
                            {skill.price}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <FaStar className="h-3 w-3 text-amber-400" />
                            {skill.rating.number}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleBookmark(skill)}
                        className="shrink-0 rounded-lg p-1.5 text-pink-500 transition hover:bg-pink-50"
                      >
                        <FaHeart className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">Settings</h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Profile Information
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <FaUser className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-900">
                        {user?.displayName || "Not set"}
                      </p>
                      <p className="text-xs text-slate-500">Display name</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="h-4 w-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-slate-900">
                        {user?.email || "Not set"}
                      </p>
                      <p className="text-xs text-slate-500">Email address</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  Notifications
                </h3>
                <div className="mt-4 space-y-3">
                  {[
                    { label: "Email notifications", defaultChecked: true },
                    { label: "Course updates", defaultChecked: true },
                    { label: "Marketing emails", defaultChecked: false },
                  ].map(({ label, defaultChecked }) => (
                    <label
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-slate-700">{label}</span>
                      <input
                        type="checkbox"
                        defaultChecked={defaultChecked}
                        className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                <h3 className="text-sm font-semibold text-red-700">
                  Danger Zone
                </h3>
                <p className="mt-1 text-sm text-red-600">
                  Permanently delete your account and all data.
                </p>
                <button className="mt-3 rounded-xl border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard;
