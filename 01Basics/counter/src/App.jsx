import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  let [Counter, setCounter] = useState(15)
  const addvalue = () => {
    console.log("clicked", Counter)
    Counter = Counter + 1
    setCounter(Counter)
    if (Counter > 20) {
      alert("You can Go to After 20")
    }
  }

  const removeValue = () => {
    setCounter(Counter - 1)
    if (Counter <= 0) {
      alert("You cant Go to Before zero")
    }
  }
  return (
    <>
      <h1>Counter Game:{Counter} </h1>
      <h2>Count Value :{Counter}</h2>
      <button onClick={addvalue}>Add Value :{Counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value :{Counter}</button>
    </>
  )
}

export default App
