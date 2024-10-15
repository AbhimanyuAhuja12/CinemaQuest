import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { addFavouriteMovie , removeFavouriteMovie} from "../utils/movieSlice";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const favouriteMovies = useSelector((store) => store?.movies?.favouriteMovies);


  useMovieDetails(id);

  const movieDetails = useSelector((store) => store?.movies?.movieDetails);

  if (!movieDetails) {
    return <Spinner />;
  }

  const {
    title,
    budget,
    genres,
    overview,
    popularity,
    release_date,
    revenue,
    vote_average,
    vote_count,
  } = movieDetails;
  
  const isFavourite = favouriteMovies.some(movie => movie.id === movieDetails.id); 

  const handleAddFavourite = () => {
    dispatch(addFavouriteMovie(movieDetails));
  };

  const handleRemoveFavourite = () => {
    dispatch(removeFavouriteMovie(movieDetails));
  };
 

  return (
    <div className="text-white p-4 m-4 bg-gray-900 rounded-lg h-screen overflow-x-hidden border border-b-white ">

      <div className="flex justify-between">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4">
        About this Movie
      </h1>
      {!isFavourite ? (
        <button className="text-white rounded-lg bg-red-700 px-2" onClick={handleAddFavourite}>Add to Favourite</button>
      ) : (
        <button  className="text-white rounded-lg bg-red-700 px-2" onClick={handleRemoveFavourite}>Remove from Favourite</button>
      )}
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Name:</h2>
          <p>{title}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Overview:</h2>
          <p>{overview}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Budget:</h2>
          <p>${budget / 1000000} million</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Revenue:</h2>
          <p>${revenue / 1000000} million</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h2 className="text-lg md:text-xl font-semibold">Popularity:</h2>
          <p>{popularity}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">
            Release Date:
          </h2>
          <p>{release_date}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Average Votes:</h2>
          <p>{vote_average}</p>
          <h2 className="text-lg md:text-xl font-semibold mt-4">Vote Count:</h2>
          <p>{vote_count}</p>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">Genres: </h2>
          {genres && genres.length > 0 ? (
            <ul>
              {genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;