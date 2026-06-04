import { createSlice } from "@reduxjs/toolkit";

export let movieSlice = createSlice({
  name: "Movies",
  initialState: {
    trendingMovies: [],
    isLoading: false,
  },
  reducers: {
    addMovies: (state, action) => {
      ((state.TrandingMovies = action.payload), (isLoading = false));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingMovies.pending, (state) => {
        state.loading = true;
      })

      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload;
      });
  },
});

export let { addMovies } = movieSlice.actions;

export default movieSlice.reducer;
