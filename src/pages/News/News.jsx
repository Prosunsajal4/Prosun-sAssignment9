import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();

  return (
    <main id="main-content" className="py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Course Detail
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Course {id}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Detailed information about this course will be displayed here.
            Check back soon for full course content, instructor details, and
            enrollment options.
          </p>
        </article>

        <aside className="lg:sticky lg:top-24">
          <RightSideNav />
        </aside>
      </div>
    </main>
  );
};

export default News;
