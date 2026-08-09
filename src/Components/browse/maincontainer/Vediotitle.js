import React, { useState } from "react";
import { Play, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Vediotitle = ({ title, overview, id }) => {
  const [showOverview, setShowOverview] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full items-end px-4 pb-12 sm:px-6 sm:pb-14 md:items-center md:px-10 md:pb-0 lg:px-16">
      <div className="w-full max-w-xl">
        {/* Title */}
        <h1
          className="
            max-w-full
            text-3xl
            font-extrabold
            leading-tight
            text-white
            drop-shadow-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          {title}
        </h1>

        {/* Overview */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showOverview
              ? "mt-4 max-h-48 opacity-100 sm:mt-5 md:mt-6 md:max-h-60"
              : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="
              max-w-2xl
              text-sm
              leading-6
              text-gray-200
              drop-shadow-lg
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            {overview}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3 md:mt-8 md:gap-4">
          {/* Play */}
          <button
            onClick={() => navigate(`/movie/${id}`)}
            className="
              flex
              items-center
              gap-1.5
              rounded-md
              bg-white
              px-4
              py-2
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-gray-200
              sm:gap-2
              sm:px-5
              sm:py-2.5
              sm:text-base
              md:px-7
              md:py-3
            "
          >
            <Play fill="black" size={18} />
            Play
          </button>

          {/* More Info */}
          <button
            onClick={() => setShowOverview((prev) => !prev)}
            className="
              flex
              items-center
              gap-1.5
              rounded-md
              bg-gray-500/70
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              backdrop-blur-sm
              transition
              hover:bg-gray-400/80
              sm:gap-2
              sm:px-5
              sm:py-2.5
              sm:text-base
              md:px-7
              md:py-3
            "
          >
            <Info size={18} />
            {showOverview ? "Close" : "More Info"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vediotitle;
