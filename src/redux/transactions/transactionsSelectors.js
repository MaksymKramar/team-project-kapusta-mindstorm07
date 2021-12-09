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
export const getLoading = (state) => state.transactions.isLoadingTransactions;

export const getSummaryIncomes = (state) => state.transactions.summaryIncomes;
export const getSummaryExpenses = (state) => state.transactions.summaryExpenses;
export const getIsLoadingSummary = (state) =>
  state.transactions.isLoadingSummary;

const getFilteredCategExp = createSelector(
  [getCategoriesExpenses],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);

const getFilteredCategInc = createSelector(
  [getCategoriesIncomes],
  (arr, category) => arr?.find((ar) => ar.category === category)?.details
);

export const getTransactionsListTrue = createSelector(
  [getTransactionsTrue],
  (transactions) => {
    const transactionsSort = [...transactions];
    const data = transactionsSort.sort((a, b) => (a.date > b.date ? 1 : -1));
    return data.reverse();
  }
);

export const getTransactionsListFalse = createSelector(
  [getTransactionsFalse],
  (transactions) => {
    const transactionsSort = [...transactions];
    const data = transactionsSort.sort((a, b) => (a.date > b.date ? 1 : -1));
    return data.reverse();
  }
);
