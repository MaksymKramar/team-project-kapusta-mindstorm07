import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut, fetchCurrentUser } from "./auth-operation";

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isLoading: false,
  isErrorLogIn: false,
  isErrorSignUp: false,
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
      state.isErrorSignUp = false;
      state.isErrorLogIn = false;
    },
    [signUp.pending](state, action) {
      state.isLoading = true;
      state.isErrorSignUp = false;
      state.isErrorLogIn = false;
    },
    [signUp.rejected](state, action) {
      state.isLoading = false;
      state.isErrorSignUp = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isErrorLogIn = false;
      state.isErrorSignUp = false;
    },
    [logIn.pending](state, action) {
      state.isLoading = true;
      state.isErrorLogIn = false;
      state.isErrorSignUp = false;
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
      state.isErrorLogIn = true;
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
