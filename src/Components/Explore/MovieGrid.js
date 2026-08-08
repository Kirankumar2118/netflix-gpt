import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "../Spinner";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ movies, pageNum, mediaType, fetchNextPage }) => {
  return (
    <InfiniteScroll
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      dataLength={movies?.results?.length || 0}
      next={fetchNextPage}
      hasMore={pageNum <= movies?.total_pages}
      loader={<Spinner />}
    >
      {movies?.results?.map((movie) => {
        if (movie.media_type === "person") return null;

        return <MovieCard key={movie.id} data={movie} mediaType={mediaType} />;
      })}
    </InfiniteScroll>
  );
};

export default MovieGrid;
