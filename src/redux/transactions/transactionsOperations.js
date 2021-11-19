import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const getFullTransInfo = createAsyncThunk(
  "transactions/getFullTransInfo", //HOW WRITE???
  async (type, date) => {
    const transactions = await api.getFullTransInfo(type, date);
    console.log(transactions);
    return transactions.data;
  }
);

const getTransByMonth = createAsyncThunk(
  "transactions/getTransByMonth", //HOW WRITE???
  async (date, type) => {
    const transactions = await api.getTransByMonth(date, type);
    console.log(transactions);
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

export {
  getFullTransInfo,
  getTransByMonth,
  addTransaction,
  deleteTransactionById,
};
