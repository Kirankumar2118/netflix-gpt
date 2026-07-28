import { PlayIcon } from "../PlayIcon";

const PlayButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="group flex items-center gap-5">
      <PlayIcon />

      <span className="text-xl text-white transition-colors duration-300 group-hover:text-pink-500">
        Watch Trailer
      </span>
    </button>
  );
};

export default PlayButton;
