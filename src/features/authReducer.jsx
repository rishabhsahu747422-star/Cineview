import { createSlice } from "@reduxjs/toolkit";
import { currentUser, userLogin } from "./authAction";

export let authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(userLogin.pending,(state)=>{
      state.isLoading =true
    })
    .addCase(userLogin.fulfilled,(state,action)=>{
      state.user =action.payload
      state.isLoading=false
    })
    .addCase(userLogin.rejected,(state)=>{
      state.isLoading=false
    })
    .addCase(currentUser.pending,(state)=>{
      state.isLoading =true
    })
    .addCase(currentUser.fulfilled,(state,action)=>{
      state.user =action.payload
      state.isLoading=false
    })
    .addCase(currentUser.rejected,(state)=>{
      state.isLoading=false
    })
  }
});

export let { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
