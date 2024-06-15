import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./Todo/TodoSlice.js"

const store = configureStore({
  reducer: todoReducer,
})

export default store
