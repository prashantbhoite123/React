import { useState } from "react"
import "./App.css"
import { Data } from "./data"
import Card from "./components/Card"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap gap-5 items-center">
        {Data.map((card) => (
          <Card card={card} key={Math.random()} />
        ))}
      </div>
    </>
  )
}

export default App
