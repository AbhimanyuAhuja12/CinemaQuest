import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies=()=>{
  


    //fetch data from tmdb api and update the store with all these movies
  const dispatch = useDispatch();

  const getNowPlayingMovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTIONS);
  
    const json = await data.json();
    // console.log(json);
  
    dispatch(addNowPlayingMovies(json.results));
  
  };
  
  useEffect(()=>{
    getNowPlayingMovies();
  },[])

};

export default useNowPlayingMovies;