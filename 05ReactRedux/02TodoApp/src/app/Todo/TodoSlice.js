import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  storeTodo: [],
}

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const Todo = {
        id: nanoid(),
        todoMsg: action.payload,
        isComplete: false,
      }
    },
    removeTodo: (state, action) => {
      state.storeTodo = state.storeTodo.filter(
        (todo) => todo.id !== action.payload
      )
    },
  },
})

export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer
