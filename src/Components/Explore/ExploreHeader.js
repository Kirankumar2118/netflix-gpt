import ExploreFilters from "./ExploreFilters";

const ExploreHeader = ({
  mediaType,
  genresData,
  genre,
  sortBy,
  filters,
  setGenre,
  setSortBy,
  setFilters,
  fetchInitialData,
}) => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
      <h1 className="text-2xl font-semibold text-white">
        {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
      </h1>

      <ExploreFilters
        genresData={genresData}
        genre={genre}
        sortBy={sortBy}
        filters={filters}
        setGenre={setGenre}
        setSortBy={setSortBy}
        setFilters={setFilters}
        fetchInitialData={fetchInitialData}
      />
    </div>
  );
};

export default ExploreHeader;
