import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  const langKey = useSelector((store) => store.config.lang); 
  
  return (
    <div className="w-full h-full flex flex-col justify-end pb-8 md:pb-16 px-4 md:px-24 absolute text-white bg-gradient-to-t from-black via-black/60 to-transparent">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">{title}</h1>
      <p className="hidden md:block text-sm lg:text-lg max-w-xl mb-4">{overview}</p>
      <div className="flex flex-wrap gap-2">
        <Link to={`/browse/${id}`}>
          <button className="bg-white text-black py-1 md:py-2 px-3 md:px-6 text-sm md:text-xl rounded-lg hover:bg-opacity-80">
            ▶️ {lang[langKey].play}
          </button>
        </Link>
        <Link to={`/about`}>
          <button className="bg-gray-500 text-white py-1 md:py-2 px-3 md:px-6 text-sm md:text-xl bg-opacity-50 rounded-lg">
            {lang[langKey].info}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;

