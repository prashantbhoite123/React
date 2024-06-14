import { useState } from "react"
import { removeTodo } from "../app/Todo/TodoSlice"
import { useDispatch } from "react-redux"

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  const toggleisComplete = () => {}

  const [isTodoEditable, setIsTodoEditable] = useState(false)

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isComplete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        // checked={todo.isComplete}
        // onChange={toggleisComplete}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isComplete ? "line-through" : ""}`}
        value={todo.todoMsg}
        onChange={(e) => settodoMsg(e.target.value)}
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
        disabled={todo.isComplete}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(removeTodo(todo._id))}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
