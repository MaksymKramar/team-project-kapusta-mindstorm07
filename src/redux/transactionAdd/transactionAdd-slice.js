import { createSlice } from "@reduxjs/toolkit";
import { transactionAdd, getGategories } from "./transactionAdd-operations";

const initialState = {
  date: "",
  description: "",
  sum: 0,
  type: false,
  categories: [],
  category: "",
  isLoading: false,
};

const transactionAddSlice = createSlice({
  name: "transactionAdd",
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.date = action.payload;
    },
  },

  extraReducers: {
    [getGategories.fulfilled](state, { payload }) {
      state.categories = payload;
      state.isLoading = false;
    },
    [getGategories.pending](state) {
      state.isLoading = true;
    },
    [getGategories.rejected](state) {
      state.isLoading = false;
    },
    [transactionAdd.fulfilled](state, { payload }) {
      state.date = payload;
      state.description = payload;
      state.sum = payload;
      state.category = "";
      state.isLoading = false;
    },
    [transactionAdd.pending](state) {
      state.isLoading = true;
    },
    [transactionAdd.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const { addDate } = transactionAddSlice.actions;

export default transactionAddSlice.reducer;
