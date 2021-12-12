import { createSlice } from "@reduxjs/toolkit";

import { getAllCategories, getFullTransInfo, getDetailInfo } from "./index";

const initialState = {
  categories: {
    expenses: [],
    incomes: [],
    total: [
      { type: "true", sum: 0 },
      { type: "false", sum: 0 },
    ],
  },
  currentType: "expenses",
  items: [],
  error: null,
  isLoading: false,
  description: [],
  totalAmount: 0,
  categorySums: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    addCurentType: (state, action) => {
      state.currentType = action.payload;
    },
  },
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      state.description = payload.data.sums;
      // state.totalSum = payload.categorySum.totalSum;
      state.isLoading = false;
      state.categorySums = payload.data.categorySums;
    },

    [getFullTransInfo.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      // state.description = [];
      // state.categorySums = [];
    },

    [getAllCategories.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getAllCategories.fulfilled]: (state, { payload }) => {
      state.categories.expenses = payload.categories.filter(
        (categoria) => !categoria.type
      );
      state.categories.incomes = payload.categories.filter(
        (categoria) => categoria.type
      );
      state.isLoading = false;
    },

    [getAllCategories.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
      state.categories.expenses = [];
      state.categories.incomes = [];
    },
  },
});

export default reportSlice.reducer;
