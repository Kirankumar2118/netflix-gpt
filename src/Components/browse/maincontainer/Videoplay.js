import React from "react";
import { useSelector } from "react-redux";
import useGettrailer from "../../../Hooks/useGettrailer";

const Videoplay = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailervedio);

  useGettrailer(movieid);

  if (!trailer) {
    return <div className="absolute inset-0 bg-black animate-pulse" />;
  }

  return (
    <section className="absolute inset-0 overflow-hidden">
      {/* Trailer */}
      <iframe
        className="
          absolute
          top-1/2
          left-1/2
          w-screen
          h-[56.25vw]
          min-h-screen
          min-w-[177.77vh]
          -translate-x-1/2
          -translate-y-1/2
          border-0
          pointer-events-none
          select-none
        "
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      {/* Left Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/55
          to-transparent
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          sm:h-64
          md:h-72
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
        "
      />

      {/* Top Gradient */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-24
          md:h-36
          bg-gradient-to-b
          from-black/80
          to-transparent
        "
      />
    </section>
  );
};

export default Videoplay;
