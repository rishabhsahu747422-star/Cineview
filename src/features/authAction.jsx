import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../config/axiosInstance";

export let userLogin = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await axiosInstance.post("auth/login", credentials);
      let details = res.data.data
      console.log(details);
      return res.data.data
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export let currentUser = createAsyncThunk("auth/me", async(_,thunkApi)=>{
 try {
      let res = await axiosInstance.get("/auth/me");
      let currentDetails= res.data.user 
      console.log(currentDetails);
      return res.data
    } catch (error) {
      return thunkApi.rejectWithValue("me api se user nhi mila",error);
    }
    
}) 
