import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main
      id="main-content"
      className="flex min-h-[70vh] items-center justify-center py-8"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Welcome back
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            Sign in to your account
          </h2>
        </div>

        {/* Social login */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
          >
            <FaGoogle className="h-4 w-4 text-red-500" />
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-3 text-slate-500">
              or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
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

        <p className="mt-6 text-center text-sm text-slate-600">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-indigo-600 hover:text-indigo-700"
            to="/register"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
