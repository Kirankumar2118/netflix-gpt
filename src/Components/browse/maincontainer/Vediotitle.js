import { Play, Info } from "lucide-react";
import React from "react";

const Vediotitle = ({ title, overview }) => {
  return (
    <div className="absolute  inset-0 z-20  left-0 w-full h-full flex items-center bg-gradient-to-r from-black via-black/60 to-transparent">
      <div className="px-6 md:px-16 lg:px-24 max-w-2xl mt-20 md:mt-28">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
          {title}
        </h1>

        <p className="hidden md:block mt-6 text-gray-200 text-base lg:text-lg leading-7 line-clamp-3 drop-shadow-md">
          {overview}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-200 transition">
            <Play fill="black" size={22} />
            Play
          </button>

          <button className="flex items-center gap-2 bg-gray-500/60 text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-gray-500/80 transition">
            <Info size={22} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vediotitle;
