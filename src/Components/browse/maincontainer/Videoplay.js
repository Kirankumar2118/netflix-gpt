import React from "react";
import { useSelector } from "react-redux";
import useGettrailer from "../../../Hooks/useGettrailer";

const Videoplay = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailervedio);

  useGettrailer(movieid);

  if (!trailer?.key) return null;

  const videoUrl =
    `https://www.youtube.com/embed/${trailer.key}` +
    `?autoplay=1` +
    `&mute=1` +
    `&controls=0` +
    `&loop=1` +
    `&playlist=${trailer.key}` +
    `&playsinline=1` +
    `&rel=0` +
    `&iv_load_policy=3` +
    `&disablekb=1`;

  return (
    <section className="absolute inset-0 overflow-hidden bg-black">
      {/* YouTube Trailer */}
      <iframe
        className="
          pointer-events-none
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
        "
        src={videoUrl}
        title="Movie Trailer"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />

      {/* Left Cinematic Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* Bottom Cinematic Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent
        "
      />

      {/* Top Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-black/80
          to-transparent
        "
      />

      {/* Subtle Overall Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </section>
  );
};

export default Videoplay;
