import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {},
    inputValue: "",
    userRepo: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setUserRepo: (state, action) => {
      state.userRepo = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setInputValue, setUserRepo } = userSlice.actions;

export default userSlice.reducer;
