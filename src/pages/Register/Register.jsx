import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub, FaGraduationCap } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleRegister = () => {
    signInWithGoogle()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main id="main-content" className="py-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 sm:flex">
        {/* Left panel - brand */}
        <div className="hidden sm:flex sm:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 text-white flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -right-12 bottom-1/3 h-36 w-36 rounded-full bg-white/5" />
          </div>
          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <FaGraduationCap className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold">Join Esho Shikhi</h2>
            <p className="mt-3 text-sm text-white/80 max-w-xs">
              Create your account and start learning from expert instructors
              today.
            </p>
          </div>
        </div>

        {/* Right panel - form */}
        <div className="flex w-full sm:w-1/2 p-8 sm:p-10 items-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Get started
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Create your account
              </h2>
            </div>

            {/* Social login */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={handleGoogleRegister}
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
                  or sign up with email
                </span>
              </div>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Your full name"
                  className="mt-1 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="https://example.com/photo.jpg (optional)"
                  className="mt-1 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
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
                  placeholder="Create a password"
                  className="mt-1 block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                className="font-semibold text-indigo-600 hover:text-indigo-700"
                to="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
