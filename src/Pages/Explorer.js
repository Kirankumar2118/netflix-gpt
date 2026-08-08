import useExplore from "../Hooks/useExplore";

import EmptyState from "../Components/Explore/EmptyState";
import ExploreHeader from "../Components/Explore/ExploreHeader";
import ExploreSkeleton from "../Components/Explore/ExploreSkeleton";
import MovieGrid from "../Components/Explore/MovieGrid";
import ContentWrapper from "../Components/ContentWrapper";
import Head from "../Components/Header/Head";

const Explorer = () => {
  const {
    movies,
    loading,
    pageNum,
    genre,
    sortBy,
    filters,
    mediaType,
    genresData,
    setGenre,
    setSortBy,
    setFilters,
    fetchInitialData,
    fetchNextPage,
  } = useExplore();

  return (
    <div className="min-h-screen bg-black">
      <Head />

      <main className="px-3 pt-20 sm:px-5 md:px-8 lg:px-10">
        <ContentWrapper>
          <ExploreHeader
            genresData={genresData}
            genre={genre}
            sortBy={sortBy}
            filters={filters}
            setGenre={setGenre}
            setSortBy={setSortBy}
            setFilters={setFilters}
            fetchInitialData={fetchInitialData}
          />

          <section className="mt-6 sm:mt-8">
            {loading ? (
              <ExploreSkeleton />
            ) : movies?.results?.length ? (
              <MovieGrid
                movies={movies}
                pageNum={pageNum}
                mediaType={mediaType}
                fetchNextPage={fetchNextPage}
              />
            ) : (
              <EmptyState />
            )}
          </section>
        </ContentWrapper>
      </main>
    </div>
  );
};

export default Explorer;
