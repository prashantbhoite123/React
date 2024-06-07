import { useState } from "react"
import "./App.css"
import { Data } from "./data"
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid gap-6 items-center justify-center p-5 md:p-10 h-auto w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {Data.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </>
  )
}

export default App
