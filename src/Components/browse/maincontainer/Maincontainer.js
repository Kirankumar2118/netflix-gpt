import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Vediotitle from "./Vediotitle";
import Videoplay from "./Videoplay";

const Maincontainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowplayingmovies?.results,
  );

  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (!movies) return;

    const randomIndex = Math.floor(Math.random() * movies.length);
    setMainMovie(movies[randomIndex]);
  }, [movies]);

  if (!mainMovie) return null;

  const { title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen">
      <Videoplay movieid={id} />

      <div className="absolute inset-0 z-20">
        <Vediotitle title={title} overview={overview} />
      </div>
    </div>
  );
};

export default Maincontainer;
