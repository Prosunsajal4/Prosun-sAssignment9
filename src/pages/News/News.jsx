import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaStar, FaArrowLeft, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const courses = useLoaderData();

  if (!courses || courses.length === 0) {
    return (
      <main id="main-content" className="py-8">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 text-center">
          <p className="text-slate-500">Loading course data...</p>
        </div>
      </main>
    );
  }

  const course = courses.find(
    (c) => c.title === decodeURIComponent(id)
  ) || courses[0];

  const related = courses.filter((c) => c._id !== course._id).slice(0, 3);

  return (
    <main id="main-content" className="py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="space-y-6">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />
            Back to courses
          </Link>

          {/* Course detail */}
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={course.image_url}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 right-4 rounded-xl bg-white/90 px-3 py-1.5 text-sm font-bold text-indigo-700 backdrop-blur-sm shadow-md">
                {course.price}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                  {course.category_id}
                </span>
                <div className="flex items-center gap-1">
                  <FaStar className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-sm font-semibold text-slate-700">
                    {course.rating.number}
                  </span>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-slate-900">
                {course.title}
              </h1>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {course.details}
              </p>

              <div className="mt-6 flex gap-3">
                <button className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 shadow-md hover:shadow-lg">
                  Enroll Now
                </button>
                <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  <FaShareAlt className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Related courses */}
          {related.length > 0 && (
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900">
                Related Courses
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((c) => (
                  <Link
                    key={c._id}
                    to={`/news/${encodeURIComponent(c.title)}`}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:bg-white hover:shadow-sm"
                  >
                    <div className="h-24 overflow-hidden rounded-xl bg-slate-100">
                      <img
                        src={c.image_url}
                        alt={c.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-slate-900 line-clamp-2">
                      {c.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-600">
                        {c.price}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <FaStar className="h-3 w-3 text-amber-400" />
                        {c.rating.number}
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

export default News;
