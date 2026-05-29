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
    <aside className="space-y-6">
      <div className="p-4 space-y-3 mb-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold">Login</h2>
        <button className="btn btn-outline w-full flex items-center gap-2">
          <FaGoogle />
          <span>Continue with Google</span>
        </button>
        <button className="btn btn-outline w-full flex items-center gap-2">
          <FaGithub />
          <span>Continue with GitHub</span>
        </button>
      </div>
      <div className="p-4 mb-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Follow</h2>
        <div className="flex flex-col">
          <a
            className="p-3 flex items-center gap-3 text-sm hover:bg-gray-50 rounded"
            href=""
          >
            <FaFacebook /> Facebook
          </a>
          <a
            className="p-3 flex items-center gap-3 text-sm hover:bg-gray-50 rounded"
            href=""
          >
            <FaTwitter /> Twitter
          </a>
          <a
            className="p-3 flex items-center gap-3 text-sm hover:bg-gray-50 rounded"
            href=""
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6 bg-white rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold">Q Zone</h2>
        <img className="rounded" src={qZone1} alt="" />
        <img className="rounded" src={qZone2} alt="" />
        <img className="rounded" src={qZone3} alt="" />
      </div>
    </aside>
  );
};

export default RightSideNav;
