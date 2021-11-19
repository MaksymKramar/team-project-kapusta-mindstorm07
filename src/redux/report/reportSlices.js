import { createSlice } from "@reduxjs/toolkit";

import { getFullTransInfo } from "./index";

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  extraReducers: {
    [getFullTransInfo.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getFullTransInfo.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getFullTransInfo.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default reportSlice.reducer;
