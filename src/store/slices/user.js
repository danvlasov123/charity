import { createSlice } from "@reduxjs/toolkit";

import {
  getLocalStorageTokens,
  setLocalStorageTokens,
  removeLocalStorageTokens,
} from "src/config/config-token";

const localStorageTokens = getLocalStorageTokens();

const initialState = {
  isAuthorization: !!localStorageTokens.access_token,
  access_token: localStorageTokens.access_token,
  refresh_token: localStorageTokens.refresh_token,
  user: null,
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    onLogout: (state) => {
      removeLocalStorageTokens();
      state.isAuthorization = false;
      state.access_token = null;
      state.refresh_token = null;
      state.user = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
