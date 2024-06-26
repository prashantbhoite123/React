import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { removeTodo } from "../App/Todo/TodoSlice"
import { toggleTodo } from "../App/Todo/TodoSlice"
import { updateTodo } from "../App/Todo/TodoSlice"
function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [todomsg, setTodoMsg] = useState(todo.todomsg)
  // const [newTodo, setNewTodo] = useState("")
  const [isTodoEditable, setIsTodoEditable] = useState(false)

  console.log("This is A Todo", todo)
  console.log("todomsg", todomsg)

  const deleteTodo = (id) => {
    console.log("button clicked")
    dispatch(removeTodo(id))
  }

  const toggleCompleted = () => {
    dispatch(toggleTodo(todo._id))
  }

  const editTodo = () => {
    setIsTodoEditable(false)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        value={todomsg}
        type="checkbox"
        className="cursor-pointer"
        checked={todo.iscompleted}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.iscompleted ? "line-through" : ""}`}
        value={todomsg}
        defaultValue={todo.todomsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.isComplete) return

          if (isTodoEditable) {
            editTodo()
          } else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo._id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
