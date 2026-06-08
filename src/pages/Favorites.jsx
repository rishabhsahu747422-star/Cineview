import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { removeFromFavorites } from "../features/movieReducer";

const Favorites = () => {
  const { favorites, movie } = useSelector((state) => state.movie);

  let dispatch = useDispatch();

  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[rgb(5,8,22)] px-6 py-8 pt-30">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Banner */}
        <div className="flex items-center justify-between rounded-[32px] border border-white/10 bg-[rgb(2,6,23)] px-10 py-10">
          <div>
            <p className="text-[13px] uppercase tracking-[6px] text-orange-400 mb-3">
              My Collection
            </p>

            <h1 className="text-3xl font-bold text-white mb-3">
              Your Favorites
            </h1>

            <p className="text-gray-400 text-md">
              A cinematic shelf of the movies you love.
            </p>
          </div>

          <button
            onClick={() => navigate("/home/movies")}
            className="cursor-pointer rounded-full bg-orange-500 px-8 py-2 text-md font-semibold text-black transition hover:bg-orange-400"
          >
            Discover more
          </button>
        </div>

        {favorites.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
              // isLoading? <h1 className='text-red-500'>Loading Trending Movies...</h1>:

              favorites?.map((movie) => {
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
                        onClick={() => navigate(`/home/movies/${movie.id}`)}
                        src={movie.poster}
                        alt=""
                        className="h-[280px] w-full object-cover hover:scale-105 cursor-pointer "
                      />

                      <div className="absolute text-white top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full">
                        ⭐ {movie.rating}
                      </div>

                      
                        <button
                          onClick={() => {
                            dispatch(removeFromFavorites(movie.id));
                            console.log(movie);
                          }}
                          className="cursor-pointer text-white hover:border absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full"
                        >
                          ❤️ Saved
                        </button>
                        
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-white text-lg">{movie.title}</h3>

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
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-[rgb(2,6,23)] py-7 text-center">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              Your list is empty.
            </h2>

            <p className="mb-8 max-w-xl text-lg text-gray-400">
              Browse trailers and add movies to Favorites so they are easy to
              revisit.
            </p>

            <button
              onClick={() => navigate("/home/movies")}
              className="rounded-full bg-orange-500 px-8 py-2 text-md cursor-pointer font-semibold text-black transition hover:bg-orange-400"
            >
              Explore movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
