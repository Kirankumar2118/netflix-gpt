import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  Generes: {},
};

const HomeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenerse: (state, action) => {
      state.Generes = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenerse } = HomeSlice.actions;

export default HomeSlice.reducer;
