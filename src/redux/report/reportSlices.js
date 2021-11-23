import { createSlice } from "@reduxjs/toolkit";

import { getAllCategories, getFullTransInfo, getDetailInfo } from "./index";

const initialState = {
  categories: {
    expenses: [],
    incomes: [],
    total: [
      { type: "true", sum: 6 },
      { type: "false", sum: 5 },
    ],
  },
  currentType: "expenses",
  items: [],
  error: null,
  isLoading: false,
  description: [],
  totalAmount: 0,
  reducers: {
    goBackOneMonth: (state, action) => {
      if (Number(state.date.month) === 1) {
        state.date.year = Number(state.date.year) - 1;
        state.date.month = 12;
        return;
      }

      state.date.month = Number(state.date.month) - 1;
    },
    goForwardOneMonth: (state, action) => {
      if (Number(state.date.month) === 12) {
        state.date.year = Number(state.date.year) + 1;
        state.date.month = 1;
        return;
      }
      state.date.month = Number(state.date.month) + 1;
    },
  },
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    addCurentType: (state, action) => {
      state.currentType = action.payload;
    },
  },
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      console.log("state:", state); // не делал, не получается
      state.description = payload.data.sums;
      // state.totalSum = payload.categorySum.totalSum;
      state.isLoading = false;
    },
    [getDetailInfo.fulfilled](state, action) {
      state.total = action.payload.totalAmount;
    },
    [getDetailInfo.pending](state, action) {},
    [getDetailInfo.rejected](state, action) {},

    [getFullTransInfo.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [getAllCategories.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getAllCategories.fulfilled]: (state, { payload }) => {
      state.categories.expenses = payload.categories.filter(
        (categoria) => !categoria.type
      );
      state.categories.incomes = payload.categories.filter(
        (categoria) => categoria.type
      );
      state.isLoading = false;
    },

    [getAllCategories.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    },
  },
});

export const { goBackOneMonth, goForwardOneMonth } = reportSlice.actions;

export default reportSlice.reducer;
