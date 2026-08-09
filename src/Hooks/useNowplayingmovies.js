import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchDatafromApi } from "../Utils/Api";
import { addnowplayingmovies } from "../Redux/Movieslice";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const data = await fetchDatafromApi("/movie/now_playing", { page: 1 });

        if (data?.results) {
          dispatch(addnowplayingmovies(data));
        }
      } catch (error) {
        console.error("Now playing movies error:", error);
      }
    };

    getNowPlaying();
  }, [dispatch]);
};

export default useNowplayingmovies;
