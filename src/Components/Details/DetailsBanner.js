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

  if (loading) return null;

  if (!data) return null;

  return (
    <section className="relative overflow-hidden">
      <BannerBackdrop
        backdrop={
          data.backdrop_path ? url?.backdrop + data.backdrop_path : null
        }
      />

      <ContentWrapper>
        <div className="relative flex flex-col gap-6 py-6 sm:gap-8 sm:py-8 md:flex-row md:gap-12 md:py-12">
          {/* Poster */}
          <div className="mx-auto w-[180px] flex-shrink-0 sm:w-[220px] md:mx-0 md:w-[280px] lg:w-[320px]">
            <BannerPoster
              poster={data.poster_path ? url?.poster + data.poster_path : null}
            />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
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
