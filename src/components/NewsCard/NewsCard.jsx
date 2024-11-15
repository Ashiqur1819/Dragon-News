import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    others_info,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 pb-3  space-y-4">
      <div className="flex items-center justify-between bg-base-200 px-6 py-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={author.img}
            alt={author.name}
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-700">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl font-semibold">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>
      <h2 className="text-lg font-bold text-gray-800 px-6">{title}</h2>
      <img
        className="w-full h-80 object-cover px-6"
        src={thumbnail_url}
        alt="Thumbnail"
      />

      <div className="px-6">
        <p className="text-sm text-gray-500 mt-2 mb-3">
          {details.substring(0, 175)}...
        </p>
        <Link to={`/news/${news._id}`} className="text-blue-500 mt-2">Read More</Link>
        <div className="divider"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-yellow-400">
            {[...Array(Math.round(rating.number))].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-600 text-base">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center text-gray-500 text-base font-semibold">
            <AiOutlineEye className="mr-1 text-xl font-semibold" />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
