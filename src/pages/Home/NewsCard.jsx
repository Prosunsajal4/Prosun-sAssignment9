import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="bg-white rounded-lg border border-green-100 overflow-hidden shadow-sm hover:shadow-md transition">
            <img className="w-full h-44 object-cover rounded-t-lg" src={image_url} alt={title} />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div>price: <span className="text-black font-medium">{news.price || '—'}</span></div>
                    <div>rating: <span className="text-black font-medium">{news.rating?.number || '—'} <span className="text-yellow-500">★</span></span></div>
                </div>
                <Link to={`/news/${_id}`} className="text-sm text-indigo-600 font-medium">View Details</Link>
            </div>
        </div>
    );
};

export default NewsCard;