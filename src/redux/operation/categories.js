import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../services/api";

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await api.getAllCategories();
      console.log(categories);
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
