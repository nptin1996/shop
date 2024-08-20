import { createSlice } from "@reduxjs/toolkit";

const pickedSlice = createSlice({
  name: "pickedProduct",
  initialState: {
    data: null,
  },
  reducers: {
    pickProduct(state, action) {
      state.data = action.payload;
    },
  },
});

export const pickedActions = pickedSlice.actions;
export default pickedSlice.reducer;
