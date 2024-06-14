import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../app/Todo/TodoSlice"
  

function AddTodo() {
  const [input, setInpute] = useState("")
  const dispatch = useDispatch(input)

  const handlorSubmit = (e) => {
    if (input !== "") {
      e.preventDefault()
      dispatch(addTodo(input))
      setInpute("")
    } else {
      alert("Add Your Todo")
    }
  }

  return (
    <form className="flex" onSubmit={handlorSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setInpute(e.target.value)}
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

export default AddTodo
