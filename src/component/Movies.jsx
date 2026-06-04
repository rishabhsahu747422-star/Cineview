import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingMovies } from "../features/movieAction";
import { addToFavorites, removeFromFavorites } from "../features/movieReducer";
import { useNavigate } from "react-router";

const Movies = () => {
  let navigate = useNavigate()

const [selectedMovie, setSelectedMovie] = useState(null);

  let dispatch = useDispatch();
  const { movie, favorites, isLoading } = useSelector((state) => state.movie);
  // console.log(movies);

  console.log(favorites);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  let movies = [
  {
    id: 1,
    title: "Inception",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500",
    releaseDate: "2010-07-16",
    rating: 8.8,
    genre: "Sci-Fi",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
  },
  {
    id: 2,
    title: "Interstellar",
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500",
    releaseDate: "2014-11-07",
    rating: 8.7,
    genre: "Adventure",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    description:
      "A team of explorers travel through a wormhole in space.",
  },
  {
    id: 3,
    title: "The Batman",
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500",
    releaseDate: "2022-03-04",
    rating: 7.8,
    genre: "Action",
    trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    description:
      "Batman uncovers corruption in Gotham City.",
  },
  {
    id: 4,
    title: "Dune",
    poster:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500",
    releaseDate: "2021-10-22",
    rating: 8.0,
    genre: "Sci-Fi",
    trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
    description:
      "A noble family becomes embroiled in a war for a desert planet.",
  },
  {
    id: 5,
    title: "Joker",
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    releaseDate: "2019-10-04",
    rating: 8.4,
    genre: "Crime",
    trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
    description:
      "The origin story of Gotham's most infamous villain.",
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    poster:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=500",
    releaseDate: "2019-04-26",
    rating: 8.4,
    genre: "Action",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    description:
      "The Avengers assemble one final time to reverse Thanos' actions.",
  },
];

  return (
    <div className="min-h-screen bg-[#020817] text-white px-6 py-8">
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

              <button className="cursor-pointer border border-white/20 px-6 py-3 rounded-full">
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
                        onClick={()=>navigate(`/home/movies/${movie.id}`)}
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
