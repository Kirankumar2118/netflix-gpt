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

  return (
    <section className="relative mb-14">
      <ContentWrapper>
        {title && (
          <h2 className="mb-6 text-2xl font-semibold text-white">{title}</h2>
        )}

        {!loading && data.length > 5 && (
          <>
            <button
              onClick={() => navigation("left")}
              className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 transition hover:bg-black md:flex"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>

            <button
              onClick={() => navigation("right")}
              className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 transition hover:bg-black md:flex"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          </>
        )}

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
              className="flex gap-4  overflow-x-auto scrollbar-hide  scroll-smooth"
            >
              {data.map((item) => {
                const poster = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;

                return (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(`/${item.media_type || endpoint}/${item.id}`)
                    }
                    className="w-36 flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-95 sm:w-40 md:w-44 lg:w-52"
                  >
                    <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
                      <Img
                        src={poster}
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute top-2 left-2 z-10">
                        <CircleRating rating={item.vote_average.toFixed(1)} />
                      </div>

                      <div className="absolute bottom-2 right-2 z-10 hidden md:block">
                        <Genres data={item.genre_ids?.slice(0, 2)} />
                      </div>
                    </div>

                    <div className="mt-3">
                      <h3 className="truncate text-base font-semibold text-white md:text-lg">
                        {item.title || item.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {dayjs(item.release_date || item.first_air_date).format(
                          "MMM D, YYYY",
                        )}
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
