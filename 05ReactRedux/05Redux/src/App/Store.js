import { configureStore } from "@reduxjs/toolkit"
import todoReduser from "./Todo/TodoSlice"

export const store = configureStore({
  reducer: todoReduser,
})
