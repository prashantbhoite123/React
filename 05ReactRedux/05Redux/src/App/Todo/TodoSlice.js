import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: {
    _id: nanoid(),
    todoMsg: "Hello World",
    isComplete: false,
  },
  todoArry: [],
}

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const Todo = {
        _id: nanoid(),
        todoMsg: action.payload,
        isComplete: false,
      }
      state.todoArry.push(Todo)
    },
    removeTodo: (state, action) => {
      state.todoArry = state.todoArry.filter(
        (todo) => todo._id !== action.payload
      )
    },

  },
})

export const { addTodo, removeTodo } = TodoSlice.actions
export default TodoSlice.reducer
