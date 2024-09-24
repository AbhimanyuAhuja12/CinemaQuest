import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  return (
    posterPath && (
      <div className="w-40 md:w-56 cursor-pointer pr-4">
        <Link to={`/browse/${id}`}>
          <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </Link>
      </div>
    )
  );
};

export default MovieCard;