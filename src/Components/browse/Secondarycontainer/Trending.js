import { useState } from "react";
import SwitchTabs from "../../SwitchTabs";
import Carousel from "../../Carousel";
import useFetch from "../../../Hooks/useFetch";
import ContentWrapper from "../../ContentWrapper";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <section>
      <ContentWrapper>
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Trending
          </h2>

          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>

        {/* Carousel */}
        <Carousel data={data?.results} loading={loading} endpoint="movie" />
      </ContentWrapper>
    </section>
  );
};

export default Trending;
