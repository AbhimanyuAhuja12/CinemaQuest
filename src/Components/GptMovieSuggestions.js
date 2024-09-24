import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  
  if (!Array.isArray(movieNames) || !Array.isArray(movieResults) || movieNames.length === 0) {
    return null; 
  }

  return (
    <div className="mt-12 text-white px-4 py-2 bg-gray-900 bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName + index} 
          title={movieName.trim()} 
          movies={movieResults[index] || []} 
        />
      ))}
    </div>
  );
};
export default GptMovieSuggestions;