import { createSlice } from "@reduxjs/toolkit";

import {
  getFullTransInfo,
  getTransByMonth,
  addTransaction,
  removeTransaction,
} from "./index";

const initialState = {
  items: [],
  sums: null,
  error: null,
  isLoading: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      state.items = payload.sums;
      state.sums = payload.categorySums.totalSums;
      state.isLoading = false;
    },

    [getFullTransInfo.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [getTransByMonth.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getTransByMonth.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.sums = action.payload.sums;
      state.isLoading = false;
    },

    [getTransByMonth.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [addTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },

    [addTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [removeTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [removeTransaction.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter((el) => el._id !== payload);
      state.isLoading = false;
    },

    [removeTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
