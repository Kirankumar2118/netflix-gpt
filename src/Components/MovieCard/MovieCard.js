import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import MovieHoverCard from "./MovieHoverCard";

import PosterFallback from "../../Assets/no-poster.png";

const MovieCard = ({ data, mediaType, fromSearch }) => {
  const navigate = useNavigate();
  const { url } = useSelector((store) => store.home);

  const posterUrl = data?.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;

  const handleClick = () => {
    navigate(`/${data.media_type || mediaType}/${data.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group relative cursor-pointer transition-all duration-300 hover:z-30 hover:scale-100"
    >
      <div className="relative overflow-hidden rounded-xl">
        <MoviePoster
          posterUrl={posterUrl}
          rating={data?.vote_average}
          genres={data?.genre_ids}
          fromSearch={fromSearch}
        />

        <MovieHoverCard
          title={data?.title || data?.name}
          rating={data?.vote_average}
          year={(data?.release_date || data?.first_air_date)?.slice(0, 4)}
          overview={data?.overview}
        />
      </div>

      <MovieInfo
        title={data?.title || data?.name}
        releaseDate={data?.release_date || data?.first_air_date}
      />
    </article>
  );
};

export default MovieCard;
