import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./Todo/TodoSlice"

export const store = configureStore({
  reducer: todoReducer,
})
