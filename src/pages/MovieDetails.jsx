import React from 'react'
import { useParams } from 'react-router'

const MovieDetails = () => {
    let {id } = useParams()
  return (
    <div>
      {
  (
    <div className="fixed right-8 bottom-8 w-[350px] rounded-2xl bg-[#07142f] p-5 border border-white/10">

      <button
        onClick={() => setSelectedMovie(null)}
        className="absolute top-2 right-3"
      >
        ✖
      </button>

      <img
        src={selectedMovie.poster}
        alt=""
        className="h-40 w-full object-cover rounded-xl"
      />

      <h2 className="mt-3 text-xl font-bold">
        {selectedMovie.title}
      </h2>

      <p className="text-sm text-slate-400 mt-2">
        {selectedMovie.description}
      </p>

      <a
        href={selectedMovie.trailer}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-lg bg-orange-500 px-4 py-2 text-black font-semibold"
      >
        ▶ Watch Trailer
      </a>

    </div>
  )
}
    </div>
  )
}

export default MovieDetails
