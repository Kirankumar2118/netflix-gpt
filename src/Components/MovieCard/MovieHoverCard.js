import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";

const MovieHoverCard = ({ title, rating, year, overview }) => {
  return (
    <div
      className="
      absolute
      inset-0
      hidden
      rounded-xl
      bg-zinc-900/95
      p-4
      opacity-0
      transition-all
      duration-300
      group-hover:opacity-100
      lg:flex
      lg:flex-col
      "
    >
      <div className="flex items-center justify-between">
        <button
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          transition
          hover:scale-110
          "
        >
          <Play size={22} fill="currentColor" />
        </button>

        <div className="flex gap-2">
          <button className="rounded-full border border-zinc-500 p-2 hover:border-white">
            <Plus size={18} />
          </button>

          <button className="rounded-full border border-zinc-500 p-2 hover:border-white">
            <ThumbsUp size={18} />
          </button>

          <button className="rounded-full border border-zinc-500 p-2 hover:border-white">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {title}
        </h3>

        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-green-500">
            {Math.round(rating * 10)}% Match
          </span>

          <span className="text-gray-300">{year}</span>
        </div>

        <p className="line-clamp-4 text-sm leading-6 text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieHoverCard;
