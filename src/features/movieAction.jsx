import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance1 } from "../config/axiosInstance1";

export const getTrendingMovies = createAsyncThunk(
  "movies/trending",
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance1.get("/trending/movie/week");
      console.log(res.data);
      return res.data.results;
    } catch (error) {
      console.log("ERROR:", error);
      console.log("MESSAGE:", error.message);
      console.log("RESPONSE:", error.response);
      return thunkApi.rejectWithValue( error.message);
    }
  },
);
