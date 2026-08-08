import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "./useFetch";
import { fetchDatafromApi } from "../Utils/Api";

const useExplore = () => {
  const { mediaType } = useParams();

  const [movies, setMovies] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const [genre, setGenre] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [filters, setFilters] = useState({});

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = async (customFilters = filters) => {
    setLoading(true);

    const res = await fetchDatafromApi(`/discover/${mediaType}`, customFilters);

    setMovies(res);
    setPageNum(2);
    setLoading(false);
  };

  const fetchNextPage = async () => {
    const res = await fetchDatafromApi(
      `/discover/${mediaType}?page=${pageNum}`,
      filters,
    );

    setMovies((prev) => {
      const merged = [...prev.results, ...res.results];

      const uniqueResults = merged.filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (t) =>
              t.id === item.id &&
              (t.media_type || mediaType) === (item.media_type || mediaType),
          ),
      );

      return {
        ...prev,
        results: uniqueResults,
      };
    });

    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setMovies(null);
    setPageNum(1);
    setGenre([]);
    setSortBy(null);
    setFilters({});

    fetchInitialData({});
  }, [mediaType]);

  return {
    movies,
    loading,
    pageNum,
    genre,
    sortBy,
    filters,
    setGenre,
    setSortBy,
    setFilters,
    genresData,
    fetchInitialData,
    fetchNextPage,
    mediaType,
  };
};

export default useExplore;
