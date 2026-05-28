import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <article className="mb-8 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
            <div className="md:flex">
                <div className="md:w-1/3">
                    <img className="w-full h-48 object-cover md:h-full" src={image_url} alt={title} />
                </div>
                <div className="p-6 md:w-2/3">
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">{title}</h2>
                    <div className="text-sm text-gray-600 mb-4">
                        {
                            details.length > 220
                                ? <p>{details.slice(0, 220)}... <Link
                                    to={`/news/${_id}`}
                                    className="text-indigo-600 font-semibold">Read More</Link></p>
                                : <p>{details}</p>
                        }
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">By Dragon News</div>
                        <Link to={`/news/${_id}`} className="text-sm text-indigo-600 font-medium">Open →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;