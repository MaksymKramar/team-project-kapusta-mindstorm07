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
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getDetailInfo = createAsyncThunk(
  "report/detailInfo",
  async ({ type, date }) => {
    try {
      const transactions = await api.getFullTransInfo({ type, date });
      return transactions;
    } catch (error) {
      return error.message;
    }
  }
);
