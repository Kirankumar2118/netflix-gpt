import { useState } from "react";
import SwitchTabs from "../../SwitchTabs";
import Carousel from "../../Carousel";
import useFetch from "../../../Hooks/useFetch";
import ContentWrapper from "../../ContentWrapper";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <section>
      <ContentWrapper>
        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            What's Popular
          </h2>

          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </div>

        {/* Carousel */}
        <Carousel data={data?.results} loading={loading} endpoint="movie" />
      </ContentWrapper>
    </section>
  );
};

export default Popular;
