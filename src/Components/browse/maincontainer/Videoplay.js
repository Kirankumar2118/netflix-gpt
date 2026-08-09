import React from "react";
import { useSelector } from "react-redux";
import useGettrailer from "../../../Hooks/useGettrailer";

const Videoplay = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailervedio);

  useGettrailer(movieid);

  if (!trailer?.key) {
    return null;
  }

  return (
    <section className="absolute inset-0 overflow-hidden">
      {/* Trailer */}
      <iframe
        className="
          absolute
          left-1/2
          top-1/2
          h-[56.25vw]
          w-[177.78vw]
          min-h-[100vh]
          min-w-[177.78vh]
          -translate-x-1/2
          -translate-y-1/2
          border-0
          pointer-events-none
          select-none
        "
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&playsinline=1`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />

      {/* Left Gradient */}
      <div
        className="
          pointer-events-none
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
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-56
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
          sm:h-64
          md:h-72
        "
      />

      {/* Top Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          bg-gradient-to-b
          from-black/80
          to-transparent
          md:h-36
        "
      />
    </section>
  );
};

export default Videoplay;
