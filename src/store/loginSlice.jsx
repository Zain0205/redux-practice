import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    user: ''
  },
  reducers: {
    handleLogin(state, actions) {
      const { role, password } = actions.payload;
      localStorage.setItem("role", role);
      localStorage.setItem("pass", password)
      state.user = localStorage.getItem('role')
      state.isLogin = true;
    },
    handleLogout(state) {
      state.isLogin = false;
      localStorage.removeItem('role')
      localStorage.removeItem('pass')
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;
