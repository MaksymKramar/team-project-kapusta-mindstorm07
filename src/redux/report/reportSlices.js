import { createSlice } from "@reduxjs/toolkit";

import { getAllCategories, getFullTransInfo } from "./index";

const initialState = {
  categories: {
    expenses: [],
    incomes: [],
  },
  items: [],
  error: null,
  isLoading: false,
  description: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      console.log("state:", state); // не делал, не получается
      state.description = payload.sums;
      // state.totalSum = payload.categorySum.totalSum;
      state.isLoading = false;
    },

    [getFullTransInfo.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
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

    [getAllCategories.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getAllCategories.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    },

    // [getFullTransInfo.pending]: (state, _) => {
    //   state.error = null;
    //   state.isLoading = true;
    // },

    // [getFullTransInfo.fulfilled]: (state, { payload }) => {
    //   state.items = payload;
    //   state.isLoading = false;
    // },

    // [getFullTransInfo.rejected]: (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // },
  },
});

export default reportSlice.reducer;
