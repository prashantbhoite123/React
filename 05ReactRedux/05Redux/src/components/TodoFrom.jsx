import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../App/Todo/TodoSlice"
import toast from "react-hot-toast"

function TodoForm() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault()
    if (input !== "") {
      dispatch(addTodo(input))
      setInput("")
    } else {
      toast.error("Enter Your input ")
    }
  }
  return (
    <form className="flex" onSubmit={handelSubmit}>
      <input
        autoFocus
        type="text"
        value={input}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setInput(e.target.value)}
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
