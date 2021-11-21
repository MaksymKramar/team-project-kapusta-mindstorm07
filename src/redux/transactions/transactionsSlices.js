import { createSlice } from "@reduxjs/toolkit";

import {
  getFullTransInfo,
  getTransByMonth,
  addTransaction,
  deleteTransactionById,
} from "./index";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    itemsTrue: [],
    itemsFalse: [],
    totalAmount: null,
    sum: null,
    error: null,
    isLoading: false,
  },
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      console.log("state:", state); // не делал, не получается
      state.items = payload.sum;
      state.sum = payload.categorySum.totalSum;
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
      state.itemsTrue = [...action.payload];
      state.itemsFalse = [...action.payload.transactionsByUser]; // вроде бы нормально сделал запрос

      state.totalAmount = action.totalAmount;
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
      state.items = [payload, ...state.items]; //не знаю правильно ли
      state.isLoading = false;
    },

    [addTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [deleteTransactionById.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [deleteTransactionById.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter((el) => el._id !== payload); // не делал
      state.isLoading = false;
    },

    [deleteTransactionById.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
