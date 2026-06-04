import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

let getTrandingMovies= createAsyncThunk(
    "movies/tranding", async()=>{
        let res= await axiosInstance.get("/tranding/movie/week")
        console.log(res);
        return res
    }
)