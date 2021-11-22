import { createSlice } from "@reduxjs/toolkit";
import { transactionAdd, getGategories } from "./transactionAdd-operations";

const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1;
const day = currentTime.getDate();

const initialState = {
  date: `${day}.${month}.${year}`,
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
      state.date = payload.date;
      state.description = payload.description;
      state.sum = payload.sum;
      state.category = payload.category;

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
