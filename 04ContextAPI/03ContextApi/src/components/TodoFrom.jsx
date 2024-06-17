import React, { useState } from "react"
import { useTodo } from "../context/TodoContext"

function TodoForm() {
  const [todo, setTodo] = useState("")
  //   console.log("This is Todo", todo)
  const { addTodo } = useTodo
  //   console.log(useTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo) return

    addTodo({ todo, complete: false })
    console.log("This is Add todo", todo)
    setTodo("")
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
