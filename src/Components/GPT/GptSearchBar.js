import React, { useEffect, useRef } from "react";
import lang, { supported_lang } from "../../Utils/langconst";
import { useDispatch, useSelector } from "react-redux";
import { changelanguage } from "../../Redux/configSlice";
import {
  addgptmovieresults,
  clearGptMovies,
  setGptLoading,
} from "../../Redux/GptSlice";
import Openai from "../../Utils/Openai";
import { options } from "../../Utils/Apioptions";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchtext = useRef(null);

  const langkey = useSelector((store) => store.config.lang);

  const handlelanguagechange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  useEffect(() => {
    return () => {
      dispatch(clearGptMovies());
    };
  }, [dispatch]);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie,
      )}&include_adult=false&language=en-US&page=1`,
      options,
    );

    const json = await data.json();

    return json.results?.[0] || null;
  };

  const handleGptSearch = async () => {
    const query = searchtext.current.value.trim();

    if (!query) return;

    const gptQuery =
      "Act as a movie recommendation system. Based on the following user query, recommend exactly 15 movies: " +
      query +
      ". Return only the 15 movie titles separated by commas. Do not include numbering, explanations, descriptions, quotes, or any other text. Example format: Inception, Interstellar, The Matrix, Tenet, Arrival.";

    dispatch(setGptLoading(true));

    try {
      const interaction = await Openai.interactions.create({
        model: "gemini-3.1-flash-lite",
        input: gptQuery,
      });

      const movieNames = interaction.output_text
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean);

      console.log("Movie names:", movieNames);

      const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      const validMovies = tmdbResults.filter(Boolean);

      console.log("TMDB movies:", validMovies);

      dispatch(addgptmovieresults(validMovies));
    } catch (error) {
      console.error("Gemini API error:", error);

      if (error.status === 429) {
        console.log("Gemini free limit reached. Try again later.");
      }
    } finally {
      dispatch(setGptLoading(false));
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleGptSearch();
      }}
      className="mx-auto flex w-[95%] max-w-3xl items-center gap-2 rounded-2xl bg-black/80 p-2 backdrop-blur-md sm:gap-3 sm:p-3"
    >
      {/* Search Input */}
      <input
        ref={searchtext}
        type="text"
        placeholder={lang[langkey].gptplaceholder}
        className="min-w-0 flex-1 rounded-xl bg-neutral-900 px-3 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-red-600 sm:px-4 sm:text-base"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-[#E50914] px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 sm:px-6 sm:py-3 sm:text-base"
      >
        {lang[langkey].Search}
      </button>

      {/* Language */}
      <select
        value={langkey}
        onChange={handlelanguagechange}
        className="w-20 shrink-0 rounded-xl border border-gray-600 bg-black px-2 py-2 text-xs text-white outline-none focus:border-red-600 sm:w-auto sm:px-4 sm:py-3 sm:text-base"
      >
        {supported_lang.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default GptSearchBar;
