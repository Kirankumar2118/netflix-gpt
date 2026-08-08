import { useCallback, useEffect, useState } from "react";
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

  const fetchInitialData = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetchDatafromApi(
        `/search/multi?query=${encodeURIComponent(query)}&page=1`,
      );

      setData(res);
      setPageNum(2);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const fetchNextPageData = async () => {
    try {
      const res = await fetchDatafromApi(
        `/search/multi?query=${encodeURIComponent(query)}&page=${pageNum}`,
      );

      setData((prev) => {
        if (!prev) return res;

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
    } catch (error) {
      console.error("Next page error:", error);
    }
  };

  useEffect(() => {
    setPageNum(1);
    setData(null);
    fetchInitialData();
  }, [query, fetchInitialData]);

  if (loading) return <Spinner />;

  return (
    <>
      <Head />

      <section className="pt-20">
        <ContentWrapper>
          {data?.results?.length ? (
            <>
              <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl">
                Search {data.total_results > 1 ? "Results" : "Result"} for "
                {query}"
              </h2>

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
    </>
  );
};

export default SearchResult;
