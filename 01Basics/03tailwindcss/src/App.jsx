import { useState } from "react"
import "./App.css"
import Card from "./components/card"

function App() {
  const { count, setCount } = useState(0)
  return (
    <>
      <h1 className=" bg-red-500 text-center  text-5xl">Prashant</h1>
      <Card username="Chai Aur code" btntext="Click Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
      <Card username="Chai Aur Coffee" btntext="Visit Me" />
    </>
  )
}

export default App
