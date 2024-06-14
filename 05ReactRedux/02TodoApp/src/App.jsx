import AddTodo from "./components/AddTodo.jsx"
import Todos from "./components/Todos.jsx"
import { useSelector } from "react-redux"


function App() {
  const todos = useSelector((state) => state.storeTodo)

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <AddTodo />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => {
            <div key={todo.id} className="full">
              <Todos todo={todo} />
            </div>
          })}
          {/* <TodoItem todo={} /> */}
        </div>
      </div>
    </div>
  )
}

export default App
