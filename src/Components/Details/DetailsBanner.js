import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import useFetch from "../../Hooks/useFetch";
import useDetailsBanner from "../../Hooks/useDetailsBanner";

import ContentWrapper from "../ContentWrapper";
import VideoPopup from "../VideoPopup";

import BannerBackdrop from "./detailsbanner/BannerBackdrop";
import BannerPoster from "./detailsbanner/BannerPoster";
import BannerContent from "./detailsbanner/BannerContent";
import BannerInfo from "./detailsbanner/BannerInfo";
import BannerCrew from "./detailsbanner/BannerCrew";
import BannerSkeleton from "./detailsbanner/BannerSkeleton";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const { show, setShow, videoId, setVideoId, toHoursAndMinutes } =
    useDetailsBanner();

  const genres = data?.genres?.map((genre) => genre.id) || [];

  const director = crew?.filter((person) => person.job === "Director") || [];

  const writer =
    crew?.filter((person) =>
      ["Screenplay", "Story", "Writer"].includes(person.job),
    ) || [];

  if (loading) return <BannerSkeleton />;

  if (!data) return null;

  return (
    <section className="relative w-full bg-black pb-12 pt-24 md:min-h-[700px] md:pt-32">
      <BannerBackdrop backdrop={url?.backdrop + data.backdrop_path} />

      <ContentWrapper>
        <div className="relative flex flex-col gap-8 md:flex-row md:gap-12">
          <BannerPoster
            poster={data?.poster_path ? url?.backdrop + data.poster_path : null}
          />

          <div className="flex-1">
            <BannerContent
              data={data}
              genres={genres}
              video={video}
              setShow={setShow}
              setVideoId={setVideoId}
            />

            <BannerInfo data={data} toHoursAndMinutes={toHoursAndMinutes} />

            <BannerCrew
              director={director}
              writer={writer}
              creators={data?.created_by}
            />
          </div>
        </div>

        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </ContentWrapper>
    </section>
  );
};

export default DetailsBanner;
