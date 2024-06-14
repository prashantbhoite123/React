import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialstate = {
  todo: {
    _id: nanoid(),
    todomsg: "hello world",
  },
  todoArry: [],
}

const TodoSlice = createSlice({
  name: "Todos",
  initialstate,
  reducers: {
    addTodo: (state, action) => {
      const Todo = {
        _id: nanoid(),
        todoMsg: action.payload,
        inComplete: false,
      }
      state.todoArry.push(Todo)
    },
    removetodo: (state, action) => {
      state.todoArry = state.todoArry.filter(
        (todo) => todo._id !== action.payload
      )
    },
    toggleTodo: () => {},
  },
})

export const { addTodo, removetodo } = TodoSlice.actions

export default TodoSlice.reducer

