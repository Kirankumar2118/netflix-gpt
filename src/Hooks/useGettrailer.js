import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { options, tmdbFetchUrl } from "../Utils/Apioptions";
import { addtarilervedio } from "../Redux/Movieslice";

const useGettrailer = (movieid) => {
  const dispatch = useDispatch();

  const getTrailer = useCallback(async () => {
    if (!movieid) return;

    try {
      const response = await fetch(
        tmdbFetchUrl(`/movie/${movieid}/videos`),
        options,
      );

      const { results } = await response.json();

      const trailerVideo =
        results?.find((video) => video.type === "Trailer") || results?.[0];

      dispatch(addtarilervedio(trailerVideo));
    } catch (error) {
      console.error("Trailer fetch error:", error);
    }
  }, [movieid, dispatch]);

  useEffect(() => {
    getTrailer();
  }, [getTrailer]);
};

export default useGettrailer;
