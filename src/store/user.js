import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageUser } from "../function";

const defaultUser = getLocalStorageUser();

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: Boolean(defaultUser),
    data: defaultUser,
  },

  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.data = action.payload;
      localStorage.setItem("currentUserAsm3", JSON.stringify(action.payload));
    },

    logout(state) {
      state.isLogin = false;
      state.data = null;
      localStorage.removeItem("currentUserAsm3");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
