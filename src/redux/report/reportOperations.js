import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

export const getFullTransInfo = createAsyncThunk(
  "report/getFullTransInfo",
  async ({ type, date }) => {
    const reportList = await api.getFullTransInfo({ type, date });
    return reportList;
  }
);

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

console.log(getFullTransInfo());
