import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const getFullTransInfoMinus = createAsyncThunk(
  "transactions/getFullTransInfoMinus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getFullTransInfo(date);
    console.log(transactions);
    return transactions.data;
  }
);

const getFullTransInfoPlus = createAsyncThunk(
  "transactions/getFullTransInfoPlus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getFullTransInfo(date);
    console.log(transactions);
    return transactions.data;
  }
);

const getTransByMonthMinus = createAsyncThunk(
  "transactions/getTransByMonthMinus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getTransByMonth(date);
    console.log(transactions);
    return transactions.data;
  }
);
const getTransByMonthPlus = createAsyncThunk(
  "transactions/getTransByMonthPlus", //HOW WRITE???
  async (date) => {
    const transactions = await api.getTransByMonth(date);
    console.log(transactions);
    return transactions.data;
  }
);

const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (newTransaction) => {
    const transaction = await api.addTransaction(newTransaction);
    console.log("addTrans:", transaction);
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
  getFullTransInfoMinus,
  getFullTransInfoPlus,
  getTransByMonthMinus,
  getTransByMonthPlus,
  addTransaction,
  deleteTransactionById,
};
