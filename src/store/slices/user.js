import { createSlice } from "@reduxjs/toolkit";

import {
  getLocalStorageTokens,
  setLocalStorageTokens,
} from "src/config/config-token";

const localStorageTokens = getLocalStorageTokens();

const initialState = {
  isAuthorization: !!localStorageTokens.access_token,
  access_token: localStorageTokens.access_token,
  refresh_token: localStorageTokens.refresh_token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthorization: (state, action) => {
      state.isAuthorization = action.payload;
    },
    setTokens: (state, action) => {
      state.access_token = action.payload;
      setLocalStorageTokens(action.payload);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
