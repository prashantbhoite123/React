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
    updateTodo: (state, action) => {},

    toggleCompleted: (state, action) => {
      state.todoarry.map((toto) => {
        
      })
    },
  },
})

export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  TodoSlice.actions

export default TodoSlice.reducer
