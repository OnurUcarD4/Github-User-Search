import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "redux/slices/user";

export default configureStore({
  reducer: { userSlice: userSlice.reducer },
});
