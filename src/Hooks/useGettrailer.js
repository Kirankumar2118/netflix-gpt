import { useEffect } from "react";
import { options } from "../Utils/Apioptions";
import { useDispatch } from "react-redux";
import { addtarilervedio } from "../Redux/Movieslice";

const useGettrailer = (movieid) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    if (!movieid) return;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos`,
      options,
    );

    const { results } = await response.json();

    const trailerVideo =
      results?.find((video) => video.type === "Trailer") || results?.[0];
    dispatch(addtarilervedio(trailerVideo));
  };

  useEffect(() => {
    getTrailer();
  }, [movieid]);
};

export default useGettrailer;
