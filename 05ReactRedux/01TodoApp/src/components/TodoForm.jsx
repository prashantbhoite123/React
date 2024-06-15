import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../app/Todo/TodoSlice"
import toast, { Toaster } from "react-hot-toast"

function TodoForm() {
  const [input, setinput] = useState("")
  const disptch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() !== "") {
      disptch(addTodo(input))
      setinput("")
      toast.success("Your Todo Added", {
        duration: 3000,
        style: {
          backgroundColor: "black",
          color: "white",
          padding: "4px",
        },
      })
    } else {
      toast.error("Enter Valid inpute here ..", {
        duration: 3000,
        style: {
          backgroundColor: "black",
          color: "white",
          padding: "4px",
        },
      })
    }
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setinput(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
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
