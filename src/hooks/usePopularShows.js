import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import {addPopularShows} from "../utils/TVshowsSlice";


const usePopularShows = () => {
 const dispatch =useDispatch();

 const getPopularShows=async()=>{
   const data =await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',API_OPTIONS);
   const json = await data.json();
   dispatch(addPopularShows(json?.results));
 
   
 }


 useEffect(()=>{
    getPopularShows();
 },[])
}

export default usePopularShows 
