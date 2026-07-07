import { configureStore } from "@reduxjs/toolkit";
import userreducer from "./Userslice";

const Appstore = configureStore({
  reducer: {
    user: userreducer,
  },
});

export default Appstore;
