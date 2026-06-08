import { createSlice } from "@reduxjs/toolkit";
import { getTrendingMovies } from "./movieAction";

export let movieSlice = createSlice({
  name: "Movies",
  initialState: {
    movies: [],
    search:"",
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    isLoading: false,
  },
  reducers: {
    addMovies: (state, action) => {
      ((state.movies = action.payload), (isLoading = false));
    },
    addToFavorites: (state, action) => {
      const exists = state.favorites.find(
        (movie) => movie.id === action.payload.id,
      );

      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (fav) => fav.id !== action.payload,
      );

      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
     setSearch: (state, action) => {
    state.search = action.payload;
  },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingMovies.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getTrendingMovies.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export let {search,setSearch, addMovies,isLoading, addToFavorites, removeFromFavorites } =
  movieSlice.actions;

export default movieSlice.reducer;
