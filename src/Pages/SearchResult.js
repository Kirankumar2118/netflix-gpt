import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDatafromApi } from "../Utils/Api";
import ContentWrapper from "../Components/ContentWrapper";
import Spinner from "../Components/Spinner";
import MovieCard from "../Components/MovieCard/MovieCard";
import Head from "../Components/Header/Head";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);

    fetchDatafromApi(`/search/multi?query=${query}&page=1`).then((res) => {
      setData(res);
      setPageNum(2);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDatafromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData((prev) => {
          const unique = [...prev.results, ...res.results].filter(
            (item, index, self) =>
              index ===
              self.findIndex(
                (t) => t.id === item.id && t.media_type === item.media_type,
              ),
          );

          return {
            ...prev,
            results: unique,
          };
        });

        setPageNum((prev) => prev + 1);
      },
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  if (loading) return <Spinner initial />;

  return (
    <section className="min-h-screen bg-[#141414] pt-28 pb-12">
      <ContentWrapper>
        <Head />
        {data?.results?.length ? (
          <>
            <h1 className="mb-8 text-2xl font-semibold text-white md:text-3xl">
              Search {data.total_results > 1 ? "Results" : "Result"} for{" "}
              <span className="text-red-600">"{query}"</span>
            </h1>

            <InfiniteScroll
              dataLength={data.results.length}
              next={fetchNextPageData}
              hasMore={pageNum <= data.total_pages}
              loader={<Spinner />}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {data.results.map((item) => {
                if (item.media_type === "person") return null;

                return (
                  <MovieCard
                    key={`${item.media_type}-${item.id}`}
                    data={item}
                    fromSearch={true}
                  />
                );
              })}
            </InfiniteScroll>
          </>
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-xl text-zinc-400">Sorry, no results found.</p>
          </div>
        )}
      </ContentWrapper>
    </section>
  );
};

export default SearchResult;
