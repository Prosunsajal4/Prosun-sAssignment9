import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <aside className="space-y-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Join Now
          </p>
          <h2 className="mt-2 text-lg font-semibold text-slate-900">Login</h2>
        </div>
        <button className="btn btn-outline w-full justify-start gap-2 rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
        <button className="btn btn-outline w-full justify-start gap-2 rounded-2xl border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:bg-indigo-50">
          <FaGithub />
          <span>Continue with GitHub</span>
        </button>
      </div>
      <div className="rounded-3xl bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Follow</h2>
        <div className="mt-3 flex flex-col">
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            className="flex items-center gap-3 rounded-2xl p-3 text-sm text-slate-600 transition hover:bg-white hover:text-indigo-700"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      {/* q zone */}
      <div className="space-y-3 rounded-3xl bg-slate-50 p-4">
        <h2 className="text-lg font-semibold text-slate-900">Q Zone</h2>
        <img className="rounded-2xl shadow-sm" src={qZone1} alt="Swimming" />
        <img className="rounded-2xl shadow-sm" src={qZone2} alt="Class" />
        <img className="rounded-2xl shadow-sm" src={qZone3} alt="Play Ground" />
      </div>
    </aside>
  );
};

export default RightSideNav;
