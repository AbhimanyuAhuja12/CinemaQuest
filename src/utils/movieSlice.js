import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null, 
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
           state.trailerVideo=action.payload;
        }
    },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies}=movieSlice.actions;

export default movieSlice.reducer;