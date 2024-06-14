import { configureStore } from "@reduxjs/toolkit"
import todoReduser  from "./Todo/TodoSlice"

export const Store = configureStore({
  reducer: todoReduser,
})
