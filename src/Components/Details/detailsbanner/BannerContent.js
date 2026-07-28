import dayjs from "dayjs";
import Genres from "../../Genres";
import CircleRating from "../../CircleRating";
import PlayButton from "./PlayButton";

const BannerContent = ({ data, genres, video, setShow, setVideoId }) => {
  return (
    <div className="flex-1 text-white">
      <h1 className="text-3xl font-semibold md:text-4xl">
        {`${data?.title || data?.name} (${dayjs(
          data?.release_date || data?.first_air_date,
        ).format("YYYY")})`}
      </h1>

      <p className="mt-2 text-lg italic text-gray-400">{data?.tagline}</p>

      <div className="mt-5">
        <Genres data={genres} />
      </div>

      <div className="mt-6 flex items-center gap-6">
        <CircleRating rating={data?.vote_average?.toFixed(1)} />

        <PlayButton
          onClick={() => {
            if (!video) return;
            setShow(true);
            setVideoId(video.key);
          }}
        />
      </div>
    </div>
  );
};

export default BannerContent;
