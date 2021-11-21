import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

export const getFullTransInfo = createAsyncThunk(
  "report/getFullTransInfo",
  async ({ type, date }) => {
    const reportList = await api.getFullTransInfo({ type, date });
    return reportList;
  }
);

console.log(getFullTransInfo());
