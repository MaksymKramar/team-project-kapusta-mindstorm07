import { createSelector } from "@reduxjs/toolkit";
import {
  getCategoriesIncomes,
  getCategoriesExpenses,
} from "../../redux/report";

export const getTransactionsTrue = (state) => state.transactions.itemsTrue;
export const getTransactionsFalse = (state) => state.transactions.itemsFalse;

export const isLoadingValue = (state) => state.transactions.isLoading;
export const getTransactionsTotalAmountTrue = (state) =>
  state.transactions.totalAmountPlus;
export const getTransactionsTotalAmountFalse = (state) =>
  state.transactions.totalAmountMinus;
export const getTransactionsSum = (state) => state.transactions.sum;
export const getLoading = (state) => state.transactions.isLoading;

const getFilteredCategExp = createSelector(
  [getCategoriesExpenses],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);

const getFilteredCategInc = createSelector(
  [getCategoriesIncomes],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);

// export const getTransactionsList = createSelector(
//   [getTransactions],
//   (transactions) => {
//     console.log("transactions:", transactions);
//     const transactionsSort = [...transactions];
//     return transactionsSort.sort((a, b) => new Date(b.date) - new Date(a.date));
//   }
// );

// console.log(getTransactions);
