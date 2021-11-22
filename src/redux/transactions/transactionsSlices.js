import { createSlice } from "@reduxjs/toolkit";

import {
  // getFullTransInfoMinus,
  // getFullTransInfoPlus,
  getTransByMonthMinus,
  getTransByMonthPlus,
  addTransaction,
  deleteTransactionById,
} from "./index";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    itemsTrue: [],
    itemsFalse: [],
    incomes: [],
    expenses: [],
    totalAmount: null,
    sum: null,
    error: null,
    isLoading: false,
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
      state.isLoading = true;
    },

    [getTransByMonthMinus.fulfilled]: (state, action) => {
      state.itemsFalse = [...action.payload.transactionsByUser]; // вроде бы нормально сделал запрос
      state.totalAmount = action.totalAmount;
      state.isLoading = false;
    },

    [getTransByMonthMinus.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [getTransByMonthPlus.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getTransByMonthPlus.fulfilled]: (state, action) => {
      state.itemsTrue = [...action.payload.transactionsByUser];
      state.totalAmount = action.totalAmount;
      state.isLoading = false;
    },

    [getTransByMonthPlus.rejected]: (state, action) => {
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
