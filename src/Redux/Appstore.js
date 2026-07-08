import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";
import moviereducer from "./Movieslice";

const Appstore = configureStore({
  reducer: {
    user: userreducer,
    movies: moviereducer,
  },
});

export default Appstore;
