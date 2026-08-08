import Select from "react-select";

const sortByData = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  {
    value: "primary_release_date.asc",
    label: "Release Date Ascending",
  },
  {
    value: "original_title.asc",
    label: "Title (A-Z)",
  },
];

const ExploreFilters = ({
  genresData,
  genre,
  sortBy,
  filters,
  setGenre,
  setSortBy,
  setFilters,
  fetchInitialData,
}) => {
  const handleChange = (selected, action) => {
    let updatedFilters = { ...filters };

    if (action.name === "sortby") {
      setSortBy(selected);

      if (action.action === "clear") {
        delete updatedFilters.sort_by;
      } else {
        updatedFilters.sort_by = selected.value;
      }
    }

    if (action.name === "genres") {
      setGenre(selected || []);

      if (action.action === "clear") {
        delete updatedFilters.with_genres;
      } else {
        updatedFilters.with_genres = selected.map((item) => item.id).join(",");
      }
    }

    setFilters(updatedFilters);
    fetchInitialData(updatedFilters);
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <Select
        isMulti
        name="genres"
        value={genre}
        options={genresData?.genres}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        closeMenuOnSelect={false}
        onChange={handleChange}
        placeholder="Select Genres"
        className="w-full md:min-w-[260px] md:max-w-[500px] text-black "
      />

      <Select
        name="sortby"
        value={sortBy}
        options={sortByData}
        isClearable
        onChange={handleChange}
        placeholder="Sort By"
        className="w-full md:w-64 text-black"
      />
    </div>
  );
};

export default ExploreFilters;
