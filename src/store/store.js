import { configureStore } from "@reduxjs/toolkit";
import pickedReducer from "./picked.js";
import userReducer from "./user.js";

const store = configureStore({
  reducer: {
    pickedProduct: pickedReducer,
    user: userReducer,
  },
});

export default store;
