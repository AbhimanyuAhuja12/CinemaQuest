import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTopRatedTVshows from '../hooks/useTopRatedTVshows'
import useAiringTodayTVshows from '../hooks/useAiringTodayshows'
import useTrendingShows from '../hooks/usePopularShows'

const Browse = () => {

// custom hook  
useNowPlayingMovies()
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();
useTopRatedTVshows();
useAiringTodayTVshows();
useTrendingShows();

  return (
    <div className=''>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
