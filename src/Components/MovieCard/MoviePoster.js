import CircleRating from "../CircleRating";
import Genres from "../Genres";
import Img from "../Img";
import PosterFallback from "../../Assets/no-poster.png";

const MoviePoster = ({ posterUrl, rating, genres, fromSearch }) => {
  return (
    <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
      <Img
        src={posterUrl || PosterFallback}
        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />

      {!fromSearch && (
        <>
          <div className="absolute bottom-3 left-3">
            <CircleRating rating={rating?.toFixed(1)} />
          </div>

          <div className="absolute bottom-3 right-3 hidden md:flex">
            <Genres data={genres?.slice(0, 2)} />
          </div>
        </>
      )}
    </div>
  );
};

export default MoviePoster;
