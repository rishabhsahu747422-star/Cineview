import React, { useEffect } from 'react'
import MovieBanner from './MovieBanner'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'

const Movies = () => {
let dispatch = useDispatch()

  useEffect(() => {
  dispatch(()=>getTrendingMovies());
}, []);
  return (
    <div>
      <MovieBanner/>
      <MovieCard/>
    </div>
  )
}

export default Movies
