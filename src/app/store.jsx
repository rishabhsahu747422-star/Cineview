import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "../features/authReducer";
import movieReducer from "../features/movieReducer";

export default configureStore({
  reducer: {
    auth: authSlice,
    movie:movieReducer,
  },
});
