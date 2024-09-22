import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addAiringTodayshows } from "../utils/TVshowsSlice";


const useAiringTodayshows = () => {
 const dispatch =useDispatch();

 const getAiringTodayshows=async()=>{
   const data =await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',API_OPTIONS);
   const json = await data.json();
   dispatch(addAiringTodayshows(json?.results));
 
   
 }


 useEffect(()=>{
    getAiringTodayshows();
 },[])
}

export default useAiringTodayshows
