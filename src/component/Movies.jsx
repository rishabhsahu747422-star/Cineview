import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../features/movieAction";
import { addMovies, addToFavorites, removeFromFavorites } from "../features/movieReducer";
import { useNavigate } from "react-router";
import MovieDetails from "../pages/movieDetails";
import {movies} from '../utils/movies'

const Movies = () => {
  let navigate = useNavigate();

  const [selectedMovie, setSelectedMovie] = useState(null);

  let dispatch = useDispatch();
  const { movie, favorites, isLoading } = useSelector((state) => state.movie);
  // console.log(movies);

  console.log(favorites);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

 
  return (
    <div className="min-h-screen bg-[#020817] text-white px-6 py-8 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl h-[340px] border border-white/10">
          <img
            src="https://picsum.photos/1400/500"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-center px-10">
            <p className="text-xs tracking-[5px] uppercase text-orange-400 mb-3">
              Featured Top Trending
            </p>

            <h1 className="text-6xl font-black mb-4">BACKROOMS</h1>

            <p className="max-w-xl text-gray-300 mb-6">
              A strange doorway appears in the basement of a furniture showroom.
            </p>

            <div className="flex gap-4">
              <button className="cursor-pointer bg-orange-500 text-black font-semibold px-6 py-3 rounded-full">
                Watch Trailer
              </button>

              <button onClick={()=>dispatch(addToFavorites(movie))} className="cursor-pointer border border-white/20 px-6 py-3 rounded-full">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* Trending */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">Trending This Week</h2>

          <p className="text-sm text-slate-400 mb-6">
            Browse the movies people are watching around the globe.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              // isLoading? <h1 className='text-red-500'>Loading Trending Movies...</h1>:

              movies?.map((movie) => {
                const isFavorite = favorites.find(
                  (fav) => fav.id === movie?.id,
                );
                return (
                  <div
                    key={movie.id}
                    className="overflow-hidden rounded-3xl border border-orange-500/20 bg-[#07142f]"
                  >
                    <div className="relative">
                      <img
                        onClick={() => navigate(`/home/movies/${movie.id}`,
                        
                  
                        )
                      }
                        src={movie.poster}
                        alt=""
                        className="h-[280px] w-full object-cover hover:scale-105 cursor-pointer "
                      />

                      <div className="absolute top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full">
                        ⭐ {movie.rating}
                      </div>

                      {isFavorite ? (
                        <button
                          onClick={() => {
                            dispatch(removeFromFavorites(movie.id));
                            console.log(movie);
                          }}
                          className="cursor-pointer hover:border absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full"
                        >
                          ❤️ Saved
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            console.log(movie);
                            dispatch(addToFavorites(movie));
                          }}
                          className="cursor-pointer hover:border absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full"
                        >
                          🤍 Save
                        </button>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg">{movie.title}</h3>

                      <p className="text-sm text-slate-400 mb-2">
                        {movie.releaseDate}
                      </p>

                      <p className="text-sm text-slate-300">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>

        {/* Popular Picks */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold">Popular Picks</h2>

          <p className="text-sm text-slate-400 mb-6">
            Catch up with today's most popular titles.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              // isLoading ? <h1 className='text-red-500'>Loading Movies...</h1>:
              movies.map((movie) => {
                return (
                  <div
                    key={movie.id}
                    className="overflow-hidden  rounded-3xl border border-orange-500/20 bg-[#07142f]"
                  >
                    <img
                      src={movie.poster}
                      alt=""
                      className="h-[260px] w-full object-cover hover:scale-105 cursor-pointer "
                    />

                    <div className="p-4">
                      <h3 className="font-bold">{movie.title}</h3>

                      <p className="text-sm text-slate-400">
                        {movie.releaseDate}
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
