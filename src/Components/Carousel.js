import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "./ContentWrapper";
import PosterFallback from "../Assets/no-poster.png";
import Img from "./Img";
import Genres from "./Genres";
import CircleRating from "./CircleRating";

const Carousel = ({ data = [], loading, endpoint, title }) => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);

  const navigation = (direction) => {
    const container = carouselRef.current;

    if (!container) return;

    container.scrollBy({
      left:
        direction === "left" ? -container.offsetWidth : container.offsetWidth,
      behavior: "smooth",
    });
  };

  const Skeleton = () => (
    <div className="w-36 flex-shrink-0 sm:w-40 md:w-44 lg:w-52">
      <div className="aspect-[2/3] animate-pulse rounded-xl bg-neutral-800" />

      <div className="mt-4 space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-neutral-800" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-800" />
      </div>
    </div>
  );

  // Remove duplicate movies
  const uniqueMovies = data.filter(
    (movie, index, self) =>
      movie?.id && index === self.findIndex((item) => item?.id === movie.id),
  );

  return (
    <section className="relative w-full py-4 sm:py-6">
      <ContentWrapper>
        {/* Title */}
        {title && (
          <h2 className="mb-4 text-xl font-bold text-white sm:mb-5 sm:text-2xl md:text-3xl">
            {title}
          </h2>
        )}

        {/* Navigation buttons */}
        {!loading && uniqueMovies.length > 5 && (
          <>
            <button
              onClick={() => navigation("left")}
              className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 transition hover:bg-black md:flex"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            <button
              onClick={() => navigation("right")}
              className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 transition hover:bg-black md:flex"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
          </>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-3 scroll-smooth scrollbar-hide"
            >
              {uniqueMovies.map((item) => {
                const poster = item?.poster_path
                  ? url?.poster + item.poster_path
                  : PosterFallback;

                const rating =
                  typeof item?.vote_average === "number"
                    ? item.vote_average.toFixed(1)
                    : "0.0";

                const releaseDate = item?.release_date || item?.first_air_date;

                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(`/${item.media_type || endpoint}/${item.id}`)
                    }
                    className="w-36 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-95 sm:w-40 md:w-44 lg:w-48"
                  >
                    {/* Poster */}
                    <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
                      <Img
                        src={poster}
                        className="h-full w-full object-cover"
                      />

                      {/* Rating */}
                      <div className="absolute left-2 top-2 z-10">
                        <CircleRating rating={rating} />
                      </div>

                      {/* Genres */}
                      <div className="absolute bottom-2 right-2 z-10 hidden md:block">
                        <Genres data={item?.genre_ids?.slice(0, 2) || []} />
                      </div>
                    </div>

                    {/* Movie info */}
                    <div className="mt-3">
                      <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                        {item?.title || item?.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                        {releaseDate
                          ? dayjs(releaseDate).format("MMM D, YYYY")
                          : "Release date unavailable"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </ContentWrapper>
    </section>
  );
};

export default Carousel;
