import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const getTransByMonthMinus = createAsyncThunk(
  "transactions/getTransByMonthMinus",
  async (date) => {
    const transactions = await api.getTransByMonthMinus(date);
    return transactions.data;
  }
);
const getTransByMonthPlus = createAsyncThunk(
  "transactions/getTransByMonthPlus",
  async (date) => {
    const transactions = await api.getTransByMonthPlus(date);
    return transactions.data;
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (newTransaction) => {
    const transaction = await api.addTransaction(newTransaction);
    return transaction.data.result;
  }
);

const deleteTransactionById = createAsyncThunk(
  "transactions/deleteTransactionById",
  async (transactionId) => {
    await api.deleteTransactionById(transactionId);
    return transactionId;
  }
);

const getSummary = createAsyncThunk("transactions/getSummary", async () => {
  const { data } = await api.getSummary();
  return data;
});

export {
  getTransByMonthMinus,
  getTransByMonthPlus,
  addTransaction,
  deleteTransactionById,
  getSummary,
};
