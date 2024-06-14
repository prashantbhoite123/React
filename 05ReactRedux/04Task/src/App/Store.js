import { configureStore } from "@reduxjs/toolkit"
import todoRedusers from "./Todo/TodoSlice"

export const store = configureStore({
  reducer: todoRedusers,
})
