import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

const initialState = {
  todosArr: [],
}

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        _id: nanoid(),
        todoMsg: action.payload,
        isComplete: false,
      }
      state.todosArr.push(todo)
    },

    removeTodo: (state, action) => {
      state.todosArr = state.todosArr.filter(
        (todo) => todo._id !== action.payload
      )
    },
    toggleTodo: (state, action) => {},
  },
})

export const { addTodo, removeTodo } = TodoSlice.actions

export default TodoSlice.reducer
