import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-4 mb-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">Breaking</span>
            <Marquee pauseOnHover={true} speed={80} className="text-sm text-gray-700">
                <Link className="mr-12" to="/">Learn Something New Every Day — check latest skills</Link>
                <Link className="mr-12" to="/">New workshop: Web Development Basics</Link>
                <Link className="mr-12" to="/">Spoken English Practice — limited slots</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;