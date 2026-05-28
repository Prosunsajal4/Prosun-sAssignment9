import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <header className="rounded-md overflow-hidden shadow-md mb-6">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-8 px-6">
                <div className="max-w-6xl mx-auto flex items-center gap-4">
                    <img className="w-20 h-20 rounded-md object-cover" src={logo} alt="logo" />
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Dragon News</h1>
                        <p className="text-sm opacity-90">Journalism Without Fear or Favour</p>
                        <p className="text-xs opacity-80 mt-1">{moment().format('dddd, MMMM D, YYYY')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;