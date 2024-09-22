import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
 
  const movies = useSelector((store) => store.movies);
  const TVshows =useSelector((store)=> store.TVshows);



  return movies.NowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>

    
    {/* TV SHOWS   */}
      <MovieList title={"Top Rated TV shows"} movies={TVshows.TopRatedTVshows}/>
      <MovieList title={"Airing Today shows"} movies={TVshows.AiringTodayshows}/>
      <MovieList title={"Popular shows"} movies={TVshows.PopularShows}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
