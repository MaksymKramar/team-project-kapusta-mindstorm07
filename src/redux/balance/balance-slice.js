import { createSlice } from "@reduxjs/toolkit";
import { createBalance } from "./balance-operations";

const initialState = {
  balance: 0,
  isLoading: false,
};

const balanceSlice = createSlice({
    name: "balance",
  initialState,
  extraReducers: {
    [createBalance.fulfilled](state, action) {
      state.balance = action.payload;
      state.isLoading = false;
    },
    [createBalance.pending](state) {
      state.isLoading = true;
    },
    [createBalance.rejected](state) {
      state.isLoading = false;
    }
  }
})


export default balanceSlice.reducer
