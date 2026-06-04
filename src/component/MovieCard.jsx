import { FaHeart } from "react-icons/fa";
// import { getImageUrl } from "../utils/imageUrl";

const MovieCard = ({ movie }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-orange-500/20 bg-[#07142f] transition hover:scale-[1.02]">

      <div className="relative">

        <img
          // src={getImageUrl(movie.poster_path)}
          // alt={movie.title}
          className="h-[320px] w-full object-cover"
        />

        <div className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs">
          {/* ⭐ {movie.vote_average?.toFixed(1)} */}
        </div>

        <button className="absolute right-3 top-3 rounded-full bg-black/80 p-2">
          <FaHeart size={12} />
        </button>

      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold">
          {/* {movie?.title} */}
        </h3>

        <p className="mb-3 text-sm text-slate-400">
          {/* {movie?.release_date?.slice(0, 4)} */}
        </p>

        <p className="line-clamp-3 text-sm text-slate-300">
          {/* {movie?.overview} */}
        </p>

      </div>
    </div>
  );
};

export default MovieCard;