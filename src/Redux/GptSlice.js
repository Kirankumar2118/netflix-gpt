import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",

  initialState: {
    getMovies: [],
    loading: false,
  },

  reducers: {
    addgptmovieresults: (state, action) => {
      state.getMovies = action.payload;
    },

    setGptLoading: (state, action) => {
      state.loading = action.payload;
    },

    clearGptMovies: (state) => {
      state.getMovies = [];
    },
  },
});

export const { addgptmovieresults, setGptLoading, clearGptMovies } =
  GptSlice.actions;

export default GptSlice.reducer;
