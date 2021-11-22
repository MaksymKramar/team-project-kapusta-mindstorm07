import { createSelector } from "@reduxjs/toolkit";

export const getTransactions = (state) => state.report.categories.incomes.sums;
export const isLoadingValue = (state) => state.transactions.isLoading;
export const getTransactionsTotalAmount = (state) =>
  state.transactions.totalAmount;
export const getTransactionsSum = (state) => state.transactions.sum;
export const getLoading = (state) => state.transactions.isLoading;

export const getTransactionsList = createSelector(
  [getTransactions],
  (transactions) => {
    console.log("transactions:", transactions);
    const transactionsSort = [...transactions];
    return transactionsSort.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
);

console.log(getTransactions);
