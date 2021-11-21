import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

// axios.defaults.baseURL = "https://kapusta-backend-project.herokuapp.com/";

export const createBalance = createAsyncThunk("api/auth/user", 
  async (balanceSum, { rejectWithValue }) => {
  try {
    const data = await api.addBalance(balanceSum);
    return data.balance;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});