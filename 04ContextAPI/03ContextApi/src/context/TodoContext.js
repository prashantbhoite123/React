import { useContext } from "react"
import { createContext } from "react"

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todos: "TodoMsg",
      completed: false,
    },
  ],
  addTodo: (id) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
})

export const useTodo = () => {
  useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
