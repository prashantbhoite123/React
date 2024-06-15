import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todoarry: [],
}

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const Todo = {
        _id: nanoid(),
        todomsg: action.payload,
        isComplete: false,
      }
      state.todoarry.push(Todo)
    },
    removeTodo: (state, action) => {
      state.todoarry = state.todoarry.filter(
        (todo) => todo._id !== action.payload
      )
    },
    updateTodo: (state, action) => {
      state.todoarry = state.todoarry.map((todo) =>
        todo._id === action.payload._id
          ? {
              ...todo,
              todomsg: action.payload.message,
            }
          : todo
      )
    },

    toggleTodo: (state, action) => {
      state.todoarry = state.todoarry.map((toto) =>
        toto._id === action.payload
          ? {
              ...toto,
              isComplete: !todo.isComplete,
            }
          : toto
      )
    },
  },
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = TodoSlice.actions

export default TodoSlice.reducer
