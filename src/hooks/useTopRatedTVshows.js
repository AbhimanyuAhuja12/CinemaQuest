import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedTVshows } from "../utils/TVshowsSlice";

const useTopRatedTVshows = () => {
   

    const dispatch =useDispatch();
    
    const getTopRatedTVshows= async()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedTVshows(json.results))

        console.log(json);
    }

    useEffect(()=>{
        getTopRatedTVshows()
    },[]);
  
}

export default useTopRatedTVshows
