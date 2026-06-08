import React from "react";
import { usemovie } from "../hooks/usemovie";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Search = () => {
    let navigate = useNavigate()
  let { searchMovie } = usemovie();
  const { search } = useSelector(
  (state) => state.movie
);

console.log(search);
  console.log(searchMovie);
  console.log(search);
  

  return (
    <div className="min-h-screen bg-[#020817] text-white px-8 pt-27 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-[40px] border border-white/5 bg-[#030b25] p-10 min-h-[400px]">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-5 rounded-full border border-orange-500/10 bg-[#1a1120] px-8 py-4">
              <span className="tracking-[4px] text-orange-400 text-sm">
                FEATURED
              </span>

              <span className="tracking-[4px] text-slate-400 text-sm">
                TOP TRENDING
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-none">
              CINEMATIC STORIES,
              <br />
              LIVE NOW
            </h1>

            <p className="mt-3 text-md text-white">Latest</p>

            <p className="mt-4 text-xl text-slate-300 leading-relaxed max-w-5xl">
              Explore the latest blockbusters, save favorites, and watch
              trailers in a cinematic experience.
            </p>

            <div className="mt-6 flex gap-5">
              <button className="flex items-center gap-3 rounded-full bg-slate-700/40 px-8 py-3 text-md font-medium text-slate-400">
                ▶ Watch Trailer
              </button>

              <button className="rounded-full bg-[#08152f] px-8 py-3 text-md font-semibold text-white">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-10">
          <h2 className="text-4xl font-bold">Search results</h2>

          <p className="mt-2 text-slate-400 text-xl">
            Showing results for "{search}".
          </p>

          {searchMovie.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {
                searchMovie?.map((movie) => {
                  
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

                        <div className="absolute top-3 left-3 bg-black/70 text-xs px-3 py-1 rounded-full">
                          ⭐ {movie.rating}
                        </div>

                        {/* {isFavorite ? (
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
                        )} */}
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
          ) : (
            <p className="mt-16 text-2xl text-slate-400">Searching movies...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
