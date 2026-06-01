import { FaClock, FaUsers, FaStar, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "./Badge";
import { getCategoryColor } from "../utils/categoryColors";

const SkillCard = ({ skill, className = "" }) => {
  const {
    _id,
    title,
    category,
    rating,
    total_read,
    author,
    posted_date,
    details,
  } = skill;

  const image = details?.image || `https://placehold.co/600x400/4f46e5/ffffff?text=${encodeURIComponent(title)}`;
  const shortDescription = details?.short_description || "Learn something amazing today.";

  return (
    <Link
      to={`/skill/${_id}`}
      className={`group block rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-800 dark:border-slate-700 ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge color={getCategoryColor(category)} size="sm">
            {category}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-bold text-white line-clamp-1">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
          {shortDescription}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <FaStar className="h-3.5 w-3.5 text-yellow-400" />
            <span>{rating?.number || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers className="h-3.5 w-3.5" />
            <span>{total_read || 0} readers</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="h-3.5 w-3.5" />
            <span>{posted_date || "Recent"}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillCard;
