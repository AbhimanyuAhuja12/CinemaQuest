import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const TVshows = useSelector((store) => store.TVshows);
  const langKey = useSelector((store) => store.config.lang); 
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies);

  return movies.NowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        {/* Movie Lists */}
         {favouriteMovies?.length > 0 && (
          <MovieList title={lang[langKey].favouriteMovie} movies={favouriteMovies} />
        )}
        <MovieList title={lang[langKey].upcomingMovies} movies={movies.UpcomingMovies} />
        <MovieList title={lang[langKey].topRated} movies={movies.TopRatedMovies} />
        <MovieList title={lang[langKey].popular} movies={movies.PopularMovies} />

        {/* TV Shows Lists */}
        <MovieList title={lang[langKey].topRatedTvShows} movies={TVshows.TopRatedTVshows} />
        <MovieList title={lang[langKey].airingTodayShows} movies={TVshows.AiringTodayshows} />
        <MovieList title={lang[langKey].popularShows} movies={TVshows.PopularShows} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
