import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDatafromApi } from "../Utils/Api";
import { addtarilervedio } from "../Redux/Movieslice";

const useGettrailer = (movieid) => {
  const dispatch = useDispatch();

  const getTrailer = useCallback(async () => {
    if (!movieid) return;

    try {
      const data = await fetchDatafromApi(`/movie/${movieid}/videos`);

      const trailerVideo =
        data?.results?.find((video) => video.type === "Trailer") ||
        data?.results?.[0];

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
