import React from "react"
import { Data } from "./data.js"
import Card from "./components/Card.jsx"

const App = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center">
      {Data.map((card) => (
        <Card card={card} key={Math.random()} />
      ))}
    </div>
  )
}

export default App
