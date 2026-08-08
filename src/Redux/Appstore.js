import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";
import moviereducer from "./Movieslice";
import HomeSlice from "./HomeSlice";
import configreducer from "./configSlice";
import gptreducer from "./GptSlice";

const Appstore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviereducer,
    home: HomeSlice,
    config: configreducer,
    gpt: gptreducer,
  },
});

export default Appstore;
