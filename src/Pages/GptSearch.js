import Head from "../Components/Header/Head";
import GptSearchBar from "../Components/GPT/GptSearchBar";
import GptMovieSugeestion from "../Components/GPT/GptMovieSugeestion";
import { BACKGROUND } from "../Utils/constant";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={BACKGROUND}
        alt="background"
        className="fixed inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" />

      {/* Header */}
      <Head />

      {/* Content */}
      <main className="relative z-10 px-3 pt-24 sm:px-5 sm:pt-28 md:px-8">
        <div className="mx-auto w-full max-w-[1600px]">
          <GptSearchBar />

          <div className="mt-6 sm:mt-8">
            <GptMovieSugeestion />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GptSearch;
