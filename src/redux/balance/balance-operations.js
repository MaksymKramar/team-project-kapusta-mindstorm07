import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://kapusta-backend-project.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const createBalance = createAsyncThunk("api/auth/user", async (credentials) => {
  try {
    const { data } = await axios.patch("api/auth/user", credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});