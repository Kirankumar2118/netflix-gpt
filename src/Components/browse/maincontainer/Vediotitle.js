import React, { useState } from "react";
import { Play, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Vediotitle = ({ title, overview, id }) => {
  const [showOverview, setShowOverview] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 z-20 flex items-center">
      <div
        className="
          w-full
          max-w-3xl
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-24
          mt-24
          md:mt-32
          lg:mt-40
          bg-gradient-to-r
          from-black
          via-black/60
          to-transparent
        "
      >
        {/* Title */}
        <h1
          className="
            max-w-3xl
            text-white
            font-black
            leading-[1]
            drop-shadow-2xl
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          {title}
        </h1>

        {/* Overview */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showOverview ? "max-h-60 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="
              hidden
              md:block
              max-w-2xl
              text-gray-200
              text-base
              lg:text-lg
              leading-7
              drop-shadow-lg
            "
          >
            {overview}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
          <button
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-white
              px-5
              py-2.5
              md:px-7
              md:py-3
              font-semibold
              text-black
              transition-all
              duration-300
              hover:bg-gray-200
              hover:scale-105
            "
            onClick={() => navigate(`/movie/${id}`)}
          >
            <Play fill="black" size={20} />
            Play
          </button>

          <button
            onClick={() => setShowOverview((prev) => !prev)}
            className="
              flex
              items-center
              gap-2
              rounded-md
              bg-gray-500/70
              backdrop-blur-sm
              px-5
              py-2.5
              md:px-7
              md:py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-gray-400/80
              hover:scale-105
            "
          >
            <Info size={20} />

            {showOverview ? "Close" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vediotitle;
