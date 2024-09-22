import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import TvshowReducer from "./TVshowsSlice"

const appStore=configureStore(
    {
        reducer: {
            user:userReducer,
            movies:moviesReducer,
            TVshows:TvshowReducer
            
        },
    }
);
export default appStore;
