import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, url } from "../Utils/Apioptions";
import { addnowplayingmovies } from "../Redux/Movieslice";
const useNowplayingmovies = () => {
  const dispatch = useDispatch();

  const getnowplaying = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addnowplayingmovies(json));
  };

  useEffect(() => {
    getnowplaying();
  }, []);
};

export default useNowplayingmovies;
