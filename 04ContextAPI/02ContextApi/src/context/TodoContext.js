import { createContext, useContext } from "react"

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello Prashant",
      completed: false,
    },
  ],
  addTodoItem: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  togglComplete: (id) => {},
})

export const useTodo = () => {
  useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
