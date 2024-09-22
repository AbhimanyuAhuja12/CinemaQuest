import { createSlice } from "@reduxjs/toolkit";

const TVshowSlice = createSlice({
    name:"TVshows",
    initialState:{

    },

    reducers:({
        addTopRatedTVshows:(state,action)=>{
            state.TopRatedTVshows=action.payload;
        },
        addAiringTodayshows:(state,action)=>{
            state.AiringTodayshows=action.payload;
        },
        addPopularShows:(state,action)=>{
            state.PopularShows=action.payload;
        },
    })


})

export const  {addTopRatedTVshows, addAiringTodayshows, addPopularShows}=TVshowSlice.actions
export default TVshowSlice.reducer;