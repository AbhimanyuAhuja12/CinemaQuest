import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo, clearTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // Fetch the video trailer here
  useEffect(() => {
    // Clear previous trailer data
    dispatch(clearTrailerVideo());

    const fetchMovieTrailer = async () => {
      if (!id) return; // Avoid fetching if id is invalid

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          API_OPTIONS
        );

        if (!response.ok) {
          console.error("Failed to fetch movie trailer");
          return;
        }

        const json = await response.json();
        const filterData = json.results.filter((r) => r.type === "Trailer");
        
        if (filterData.length > 0) {
          dispatch(addTrailerVideo(filterData[0])); // Dispatch the first trailer found
        } else {
          console.warn("No trailer found for this movie");
          dispatch(clearTrailerVideo()); // Clear trailer if none found
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
        dispatch(clearTrailerVideo()); // Clear trailer on error
      }
    };

    fetchMovieTrailer();

    // Cleanup function to clear trailer
    return () => {
      dispatch(clearTrailerVideo());
    };
  }, [id, dispatch]); // Add `id` and `dispatch` to the dependency array

  return trailerVideo;
};

export default useMovieTrailer;
