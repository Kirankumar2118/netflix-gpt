import { useSelector } from "react-redux";
import Carousel from "../Carousel";

const GptMovieSugeestion = () => {
  const { getMovies, loading } = useSelector((store) => store.gpt);

  if (!loading && !getMovies?.length) return null;

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <Carousel
        data={getMovies}
        title="GPT Recommendations"
        endpoint="movie"
        loading={loading}
      />
    </section>
  );
};

export default GptMovieSugeestion;
