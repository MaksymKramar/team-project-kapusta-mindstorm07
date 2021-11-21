import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

export const getGategories = createAsyncThunk("api/categories",
  async (_,{ rejectWithValue }) => {
  try {
    const data = await api.getAllCategories();
    console.log(data.categories)
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
    console.log(data)
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
}

)
