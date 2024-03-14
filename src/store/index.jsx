import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import dataSlice from "./DataSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    stockData: dataSlice.reducer
  }
})

export default store