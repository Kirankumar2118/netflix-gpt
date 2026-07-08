import React from "react";
import useGettrailer from "../../../Hooks/useGettrailer";
import { useSelector } from "react-redux";

const Videoplay = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailervedio);

  useGettrailer(movieid);
  if (!trailer) {
    return <div className="h-screen bg-black animate-pulse" />;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <iframe
        className="w-full h-full scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}&playsinline=1&rel=0`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
};

export default Videoplay;
