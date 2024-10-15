import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null, 
        trailerVideo:null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieDetails: null,
        favouriteMovies: JSON.parse(localStorage.getItem("favouriteMovies")) || [],
       
    },

    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.NowPlayingMovies=action.payload;
        },
        addPopularMovies :(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addUpcomingMovies :(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addTopRatedMovies :(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
           state.trailerVideo=action.payload;
        },
          clearTrailerVideo: (state, action) => {
            state.trailerVideo = null;
          },
          addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
          },

          addFavouriteMovie: (state, action) => {
            const movie = action.payload;
      
            // Check if the movie is already in favourites
            if (!state.favouriteMovies.find((m) => m.id === movie.id)) {
              state.favouriteMovies.push(movie);
      
              // Save only favouriteMovies to localStorage
              localStorage.setItem(
                "favouriteMovies",
                JSON.stringify(state.favouriteMovies)
              );
            }
          },
          removeFavouriteMovie: (state, action) => {
            state.favouriteMovies = state.favouriteMovies.filter(
              (m) => m.id !== action.payload.id
            );
      
            // Update localStorage after removing a movie from favourites
            localStorage.setItem(
              "favouriteMovies",
              JSON.stringify(state.favouriteMovies)
            );
          },
        },
    },
);

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,clearTrailerVideo,addMovieDetails,addFavouriteMovie,removeFavouriteMovie}=movieSlice.actions;

export default movieSlice.reducer;