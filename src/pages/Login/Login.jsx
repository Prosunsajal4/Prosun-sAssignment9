import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub, FaGraduationCap, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message || "Failed to sign in. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    signInWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError(err.message || "Failed to sign in with Google.");
      });
  };

  return (
    <main id="main-content" className="py-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800 sm:flex">
        {/* Left panel */}
        <div className="hidden sm:flex sm:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 text-white flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -right-12 bottom-1/3 h-36 w-36 rounded-full bg-white/5" />
          </div>
          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <FaGraduationCap className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold">Welcome to Esho Shikhi</h2>
            <p className="mt-3 text-sm text-white/80 max-w-xs">
              Start your learning journey today. Join thousands of students
              building new skills.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex w-full sm:w-1/2 p-8 sm:p-10 items-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Welcome back
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                Sign in to your account
              </h2>
            </div>

            {error && (
              <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Social login */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <FaGoogle className="h-4 w-4 text-red-500" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-slate-500 dark:bg-slate-900">
                  or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    name="password"
                    placeholder="Enter your password"
                    className="block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <FaEyeSlash className="h-4 w-4" /> : <FaEye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <input type="checkbox" className="rounded border-slate-300" />
                  Remember me
                </label>
                <a href="#" className="text-indigo-600 hover:text-indigo-700">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link
                className="font-semibold text-indigo-600 hover:text-indigo-700"
                to="/register"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
