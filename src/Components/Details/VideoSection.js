import { useState } from "react";
import ContentWrapper from "../ContentWrapper";
import Img from "../Img";
import { PlayIcon } from "./PlayIcon";
import VideoPopup from "../VideoPopup";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const Skeleton = () => (
    <div className="w-40 flex-shrink-0 sm:w-52 md:w-64 lg:w-[23%]">
      <div className="aspect-video animate-pulse rounded-xl bg-neutral-800" />

      <div className="mt-3 space-y-2">
        <div className="h-4 w-full animate-pulse rounded bg-neutral-800" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-800" />
      </div>
    </div>
  );

  return (
    <>
      <section className="mb-14">
        <ContentWrapper>
          {data?.results?.length > 0 && (
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Official Videos
            </h2>
          )}

          {!loading ? (
            <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2 md:gap-6">
              {data?.results?.map((video) => (
                <div
                  key={video.id}
                  onClick={() => {
                    setVideoId(video.key);
                    setShow(true);
                  }}
                  className="w-40 flex-shrink-0 cursor-pointer sm:w-52 md:w-64 lg:w-[23%]"
                >
                  <div className="group relative overflow-hidden rounded-xl">
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center ">
                      <PlayIcon />
                    </div>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-white md:text-base">
                    {video.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex gap-4 overflow-hidden md:gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          )}
        </ContentWrapper>
      </section>

      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </>
  );
};

export default VideosSection;
