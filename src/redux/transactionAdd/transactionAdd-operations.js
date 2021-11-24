import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

export const getGategories = createAsyncThunk("api/categories",
  async (_,{ rejectWithValue }) => {
  try {
    const data = await api.getAllCategories();
    return data.categories;
  } catch (error) {
    return rejectWithValue(error.message);
  }
}
)

export const transactionAdd = createAsyncThunk("api/transactions/add", 
  async (transaction, { rejectWithValue }) => {
  try {
    const data = await api.addTransaction(transaction);
    return data.data.result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
}

)
