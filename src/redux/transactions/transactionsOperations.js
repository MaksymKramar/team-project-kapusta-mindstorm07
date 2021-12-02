import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

// const getFullTransInfoMinus = createAsyncThunk(
//   "transactions/getFullTransInfoMinus", //HOW WRITE???
//   async (date) => {
//     const transactions = await api.getFullTransInfoMinus(date);
//     console.log(transactions);
//     return transactions.data;
//   }
// );

// const getFullTransInfoPlus = createAsyncThunk(
//   "transactions/getFullTransInfoPlus", //HOW WRITE???
//   async (date) => {
//     const transactions = await api.getFullTransInfoPlus(date);
//     console.log(transactions);
//     return transactions.data;
//   }
// );

const getTransByMonthMinus = createAsyncThunk(
  "transactions/getTransByMonthMinus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getTransByMonthMinus(date);
    return transactions.data;
  }
);
const getTransByMonthPlus = createAsyncThunk(
  "transactions/getTransByMonthPlus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getTransByMonthPlus(date);
    // console.log(transactions);
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
    console.log("da", transactionId);
    await api.deleteTransactionById(transactionId);
    return transactionId;
  }
);

const getSummary = createAsyncThunk("transactions/getSummary", async () => {
  const { data } = await api.getSummary();
  return data;
});

export {
  // getFullTransInfoMinus,
  // getFullTransInfoPlus,
  getTransByMonthMinus,
  getTransByMonthPlus,
  addTransaction,
  deleteTransactionById,
  getSummary,
};
