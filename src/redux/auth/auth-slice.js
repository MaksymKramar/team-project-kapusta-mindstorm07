import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, fetchCurrentUser } from "./auth-operation";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      console.log(action.payload);

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [signUp.pending](state, action) {
      state.isLoading = true;
    },
    [signUp.rejected](state, action) {
      state.isLoading = false;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
    },

    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.pending](state, action) {
      state.isLoading = true;
    },
    [logOut.rejected](state, action) {
      state.isLoading = false;
    },

    [fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
