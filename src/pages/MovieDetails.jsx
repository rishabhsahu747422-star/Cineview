import React from "react";
import { useNavigate, useParams } from "react-router";
import { movies } from "../utils/movies";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);

  const movie = movies.find((m) => m.id === Number(id));
  console.log(movie);

  const videoId = movie?.trailer.split("v=")[1]

  return (
    <div>
      {
        <div className="fixed left-70 top-40 bottom-8 w-[950px] rounded-2xl bg-[#07142f] p-5 border border-white/10">
          <button
            onClick={
              () => navigate("/home/movies")
              // setSelectedMovie(null)
            }
            className="cursor-pointer absolute top-2 right-3"
          >
            ✖
          </button>

          <iframe
            width="100%"
            height="550"
            src={`https://www.youtube.com/embed/${videoId}`}
            // title="Trailer"
            allowFullScreen
          />
        </div>
      }
    </div>
  );
};

export default MovieDetails;
