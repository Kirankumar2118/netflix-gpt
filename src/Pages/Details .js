import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import Footer from "../Components/Login/Footer";
import Head from "../Components/Header/Head";
import DetailsBanner from "../Components/Details/DetailsBanner";
import Cast from "../Components/Details/Cast";
import VideosSection from "../Components/Details/VideoSection";
import Similar from "../Components/Details/Similar";
import Recommendation from "../Components/Details/Recommondation";

function Details() {
  const { mediaType, id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "auto"
    });
  }, [id]);

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`,
  );

  return (
    <>
      <Head />

      <main className="pt-20">
        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

        <Cast data={credits?.cast} loading={creditsLoading} />

        <VideosSection data={data} loading={loading} />

        <Similar mediaType={mediaType} id={id} />

        <Recommendation mediaType={mediaType} id={id} />
      </main>

      <Footer />
    </>
  );
}

export default Details;
