import dayjs from "dayjs";

const MovieInfo = ({ title, releaseDate }) => {
  return (
    <div className="mt-3">
      <h3 className="truncate text-base font-medium text-white md:text-lg">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-400">
        {releaseDate ? dayjs(releaseDate).format("MMM D, YYYY") : "Coming Soon"}
      </p>
    </div>
  );
};

export default MovieInfo;
