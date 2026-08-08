import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { options, url } from "../Utils/Apioptions";
import { addnowplayingmovies } from "../Redux/Movieslice";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();

  const getnowplaying = useCallback(async () => {
    try {
      const data = await fetch(url, options);
      const json = await data.json();

      dispatch(addnowplayingmovies(json));
    } catch (error) {
      console.error("Now playing movies error:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    getnowplaying();
  }, [getnowplaying]);
};

export default useNowplayingmovies;
