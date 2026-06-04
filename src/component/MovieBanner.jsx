// import { getImageUrl } from "../utils/imageUrl";

const MovieBanner = ({ movie }) => {
  return (
    <section className="relative h-[400px] overflow-hidden rounded-[32px]">

      <img
        // src={getImageUrl(movie.backdrop_path)}
        // alt={movie?.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817dd] to-transparent" />

      <div className="relative z-10 flex h-full items-center px-10">

        <div className="max-w-xl">

          <p className="mb-4 text-xs uppercase tracking-[6px] text-orange-400">
            Featured Top Trending
          </p>

          <h1 className="mb-4 text-6xl font-black uppercase">
            {/* {movie?.title} */}
          </h1>

          <p className="mb-6 text-slate-300">
            {/* {movie?.overview} */}
          </p>

          <div className="flex gap-4">

            <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-black">
              Watch Trailer
            </button>

            <button className="rounded-full border border-white/20 px-6 py-3">
              Add to Favorites
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MovieBanner;