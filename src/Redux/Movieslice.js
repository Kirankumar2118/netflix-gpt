import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movie",
  initialState: {
    nowplayingmovies: null,
    trailervedio: null,
  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload;
    },
    addtarilervedio: (state, action) => {
      state.trailervedio = action.payload;
    },
  },
});

export const { addnowplayingmovies, addtarilervedio } = Movieslice.actions;
export default Movieslice.reducer;
