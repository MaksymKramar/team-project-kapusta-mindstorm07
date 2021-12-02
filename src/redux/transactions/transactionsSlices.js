import { createSlice } from "@reduxjs/toolkit";

import {
  // getFullTransInfoMinus,
  // getFullTransInfoPlus,
  getTransByMonthMinus,
  getTransByMonthPlus,
  deleteTransactionById,
  getSummary,
} from "./index";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    itemsTrue: [],
    itemsFalse: [],
    incomes: [],
    expenses: [],
    totalAmountMinus: 0,
    totalAmountPlus: 0,
    sum: null,
    error: null,
    isLoadingTransactions: false,

    summaryIncomes: [],
    summaryExpenses: [],
    isLoadingSummary: false,
  },
  extraReducers: {
    // [getFullTransInfoMinus.pending]: (state, _) => {
    //   state.error = null;
    //   state.isLoading = true;
    // },

    // [getFullTransInfoMinus.fulfilled]: (state, { payload }) => {
    //   console.log("state:", state); // не делал, не получается
    //   state.items = payload.sum;
    //   state.totalSum = payload.categorySum.totalSum;
    //   state.isLoading = false;
    // },

    // [getFullTransInfoMinus.rejected]: (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // },

    // [getFullTransInfoPlus.pending]: (state, _) => {
    //   state.error = null;
    //   state.isLoading = true;
    // },

    // [getFullTransInfoPlus.fulfilled]: (state, { payload }) => {
    //   console.log("state:", state); // не делал, не получается
    //   state.items = payload.sum;
    //   state.totalSum = payload.categorySum.totalSum;
    //   state.isLoading = false;
    // },

    // [getFullTransInfoPlus.rejected]: (state, action) => {
    //   state.error = action.error.message;
    //   state.isLoading = false;
    // },

    [getTransByMonthMinus.pending]: (state, _) => {
      state.error = null;
      state.isLoadingTransactions = true;
    },

    [getTransByMonthMinus.fulfilled]: (state, action) => {
      state.itemsFalse = [...action.payload.transactionsByUser];
      state.totalAmountMinus = action.payload.totalAmount;
      state.isLoadingTransactions = false;
    },

    [getTransByMonthMinus.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoadingTransactions = false;
      state.totalAmountMinus = 0;
      state.itemsFalse = [];
    },

    [getTransByMonthPlus.pending]: (state, _) => {
      state.error = null;
      state.isLoadingTransactions = true;
    },

    [getTransByMonthPlus.fulfilled]: (state, action) => {
      state.itemsTrue = [...action.payload.transactionsByUser];
      state.totalAmountPlus = action.payload.totalAmount;
      state.isLoadingTransactions = false;
    },

    [getTransByMonthPlus.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoadingTransactions = false;
      state.totalAmountPlus = 0;
      state.itemsTrue = [];
    },

    [deleteTransactionById.pending]: (state, _) => {
      state.error = null;
      state.isLoadingTransactions = true;
    },

    [deleteTransactionById.fulfilled]: (state, { payload }) => {
      state.itemsTrue = state.itemsTrue.filter((el) => el._id !== payload);
      state.itemsFalse = state.itemsFalse.filter((el) => el._id !== payload);
      state.isLoadingTransactions = false;
    },

    [deleteTransactionById.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoadingTransactions = false;
    },

    [getSummary.fulfilled]: (state, action) => {
      state.summaryIncomes = action.payload.totalReport.filter(
        (item) => item._id.type
      );
      state.summaryExpenses = action.payload.totalReport.filter(
        (item) => !item._id.type
      );
      state.isLoadingSummary = false;
    },

    [getSummary.pending]: (state, _) => {
      state.error = null;
      state.isLoadingSummary = true;
    },

    [getSummary.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoadingSummary = false;
    },
  },
});

export default transactionsSlice.reducer;
