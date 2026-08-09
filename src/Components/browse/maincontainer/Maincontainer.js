import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Vediotitle from "./Vediotitle";
import Videoplay from "./Videoplay";

const Maincontainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowplayingmovies?.results,
  );

  const { url } = useSelector((store) => store.home);

  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (!movies?.length) return;

    const randomMovie = movies[Math.floor(Math.random() * movies.length)];

    setMainMovie(randomMovie);
  }, [movies]);

  if (!mainMovie) return null;

  const { id, title, overview, backdrop_path } = mainMovie;

  const backdrop = backdrop_path ? `${url?.backdrop}${backdrop_path}` : "";

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-black sm:h-[75vh] md:h-[85vh] lg:h-screen">
      {/* Mobile / Tablet Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url(${backdrop})`,
        }}
      />

      {/* Mobile Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black md:hidden" />

      {/* Desktop Trailer */}
      <div className="absolute inset-0 hidden md:block">
        <Videoplay movieid={id} />
      </div>

      {/* Desktop Overlay */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/50 to-transparent md:block" />

      <div className="absolute inset-x-0 bottom-0 hidden h-64 bg-gradient-to-t from-black via-black/70 to-transparent md:block" />

      {/* Movie Information */}
      <div className="absolute inset-0 z-20 flex items-end md:items-center">
        <Vediotitle title={title} overview={overview} id={id} />
      </div>
    </section>
  );
};

export default Maincontainer;
