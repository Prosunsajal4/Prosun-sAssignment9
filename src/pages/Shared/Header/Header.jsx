import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <header className="relative overflow-hidden mb-8">
            <div className="hero-heroGradient py-16 px-4 md:py-24">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Skill is Power</h1>
                    <p className="mt-4 text-lg md:text-xl opacity-90">Empower yourself through hands-on learning and real-world growth.</p>
                    <div className="mt-6">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mx-1 opacity-60"></span>
                        <span className="inline-block w-2 h-2 bg-white rounded-full mx-1 opacity-30"></span>
                        <span className="inline-block w-2 h-2 bg-white rounded-full mx-1 opacity-30"></span>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto flex items-center justify-between mt-4 px-4">
                <div className="flex items-center gap-3">
                    <img className="w-10 h-10" src={logo} alt="logo" />
                    <div>
                        <div className="text-sm font-semibold">Esho Shikhi</div>
                        <div className="text-xs text-gray-500">Learn Something New Every Day</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a className="text-sm text-gray-600" href="/">Home</a>
                    <a className="text-sm text-gray-600" href="/profile">My Profile</a>
                </div>
            </div>
        </header>
    );
};

export default Header;