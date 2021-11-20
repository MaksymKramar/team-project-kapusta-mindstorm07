import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-backend-project.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/api/auth/login", credentials);
    token.set(data.data.token);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const signUp = createAsyncThunk("auth/signup", async (credentials) => {
  try {
    const { email, password } = credentials;
    console.log({ email, password });
    const { data } = await axios.post("/api/auth/signup", credentials);

    if (data.status === "success") {
      const { data } = await axios.post("/api/auth/login", { email, password });
      token.set(data.data.token);

      return data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    const { data } = await axios.get("/api/auth/logout");
    token.unset();

    return data;
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refreh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    // console.log(persistedToken);
    try {
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      const { data } = await axios.get("/api/auth/user/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authGoogle = createAsyncThunk(
  "/google-redirect",
  async (useremail, { rejectWithValue }) => {
    // const { useremail } = credentials
    try {
      const { data } = await axios.get(`/api/auth/user/${useremail}`);
      // console.log(data);

      token.set(data.token);

      return data;
    } catch (error) {
      // return Promise.reject(error)
      return rejectWithValue(error.message);
    }
  }
);
