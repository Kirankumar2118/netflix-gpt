import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";
import moviereducer from "./Movieslice";
import HomeSlice from "./HomeSlice";

const Appstore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviereducer,
    home: HomeSlice,
  },
});

export default Appstore;
