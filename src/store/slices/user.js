import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorization: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthorization: (state, action) => {
      state.isAuthorization = action.payload;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
