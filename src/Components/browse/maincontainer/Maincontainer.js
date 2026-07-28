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
    if (!movies?.length) return;

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    setMainMovie(randomMovie);
  }, [movies]);

  if (!mainMovie) return null;

  const { id, title, overview } = mainMovie;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <Videoplay movieid={id} />

      <div className="absolute inset-0 z-20">
        <Vediotitle title={title} overview={overview} id={id} />
      </div>
    </section>
  );
};

export default Maincontainer;
