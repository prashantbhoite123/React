import { useState } from "react"
import CustomHook from "./Hook/CustomHook"
import "./App.css"

function App() {
  const [jock, setjock] = useState(null)
  const { Data, fetchData } = CustomHook()

  const handleClick = () => {
    fetchData()
    setjock(Data)
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Click</button>
        <p>{jock}</p>
      </div>
    </>
  )
}

export default App
