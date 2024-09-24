import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import TvshowReducer from "./TVshowsSlice"
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore=configureStore(
    {
        reducer: {
            user:userReducer,
            movies:moviesReducer,
            TVshows:TvshowReducer,
            gpt:gptReducer,
            config:configReducer,
            
        },
    }
);
export default appStore;
