import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
// removed BreakingNews and NewsCard usages — replaced with generic sections

const Home = () => {
  // keep loader data available for future use but don't render 'news' cards
  const data = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <aside className="lg:col-span-1">
          <LeftSideNav />
        </aside>
        {/* main content */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Top Rated Providers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="instructor-card p-4 text-center">
              <img className="mx-auto w-24 h-24 rounded-md object-cover" src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg" alt="Alex Martin" />
              <h3 className="mt-3 font-semibold">Alex Martin</h3>
              <p className="text-sm text-gray-500">Beginner Guitar Lessons</p>
              <div className="mt-2 text-sm text-yellow-500">4.8 ★</div>
              <div className="text-xs text-gray-400">Slots Available: 3</div>
            </div>
            <div className="instructor-card p-4 text-center">
              <img className="mx-auto w-24 h-24 rounded-md object-cover" src="https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg" alt="John Ray" />
              <h3 className="mt-3 font-semibold">John Ray</h3>
              <p className="text-sm text-gray-500">Basic Photography Workshop</p>
              <div className="mt-2 text-sm text-yellow-500">4.7 ★</div>
              <div className="text-xs text-gray-400">Slots Available: 4</div>
            </div>
            <div className="instructor-card p-4 text-center">
              <img className="mx-auto w-24 h-24 rounded-md object-cover" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" alt="Omar Hossain" />
              <h3 className="mt-3 font-semibold">Omar Hossain</h3>
              <p className="text-sm text-gray-500">Creative Writing Workshop</p>
              <div className="mt-2 text-sm text-yellow-500">4.9 ★</div>
              <div className="text-xs text-gray-400">Slots Available: 4</div>
            </div>
            <div className="instructor-card p-4 text-center">
              <img className="mx-auto w-24 h-24 rounded-md object-cover" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" alt="Sara Hossain" />
              <h3 className="mt-3 font-semibold">Sara Hossain</h3>
              <p className="text-sm text-gray-500">Spoken English Practice</p>
              <div className="mt-2 text-sm text-yellow-500">4.6 ★</div>
              <div className="text-xs text-gray-400">Slots Available: 5</div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-12 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <h4 className="font-semibold">Browse Skills</h4>
              <p className="text-sm text-gray-500 mt-2">Explore a wide variety of courses and find the perfect skill to learn.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <h4 className="font-semibold">Choose a Provider</h4>
              <p className="text-sm text-gray-500 mt-2">Select a top-rated instructor based on reviews and slots availability.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <h4 className="font-semibold">Start Learning</h4>
              <p className="text-sm text-gray-500 mt-2">Join live classes or access tutorials at your own pace.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <h4 className="font-semibold">Get Certified</h4>
              <p className="text-sm text-gray-500 mt-2">Complete the course and receive a certificate to showcase your skills.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6">What Our Students Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <img className="w-16 h-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Trisha" />
              <h4 className="mt-3 font-semibold">Trisha Chakrabarti</h4>
              <p className="text-sm text-gray-500 mt-2">This course helped me gain confidence in speaking English. Highly recommend!</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <img className="w-16 h-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul" />
              <h4 className="mt-3 font-semibold">Rahul Das</h4>
              <p className="text-sm text-gray-500 mt-2">I learned HTML, CSS, and JS from scratch. Now I can build websites easily!</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm text-center">
              <img className="w-16 h-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ananya" />
              <h4 className="mt-3 font-semibold">Ananya Sen</h4>
              <p className="text-sm text-gray-500 mt-2">The yoga sessions helped me stay relaxed and focus on my studies.</p>
            </div>
          </div>
        </section>

        {/* simple footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <div>
              <h3 className="font-bold">Esho Shikhi</h3>
              <p className="text-sm text-gray-400 mt-2">Learn Something New Every Day</p>
            </div>
            <div>
              <h4 className="font-semibold">Navigation</h4>
              <ul className="text-sm text-gray-400 mt-2">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Follow Me</h4>
              <div className="flex gap-2 mt-2 text-gray-400">FB · IG · LI · TW</div>
            </div>
          </div>
        </footer>
        {/* right side */}
        <aside className="lg:col-span-1 mt-8 lg:mt-0">
          <RightSideNav />
        </aside>
      </div>
    </div>
  );
};

export default Home;
