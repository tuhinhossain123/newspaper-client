import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  const { img, title, publisher, description, _id } = articles;
  return (
    <div className="bg-base-100">
      <div>
        <img src={img} alt="" className="w-full" />
        <p className="text-xs text-right py-1 pr-1">{publisher}</p>
      </div>
      <div className="space-y-1 mt-1 px-5 mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="font-medium text-gray-400">
          {description.slice(0, 110)}...
        </p>
        <div className="pt-2">
          <Link to={`allArticles/${_id}`} className=" font-semibold">
            View Details..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
