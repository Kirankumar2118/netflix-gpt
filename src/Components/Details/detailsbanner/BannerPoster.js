import Img from "../../Img";
import PosterFallback from "../../../Assets/no-poster.png";

const BannerPoster = ({ poster }) => {
  return (
    <div className="flex-shrink-0">
      <Img
        src={poster || PosterFallback}
        className="block w-full rounded-xl md:max-w-[350px]"
      />
    </div>
  );
};

export default BannerPoster;
