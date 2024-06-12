import React, { useState } from "react"
import useHook from "./Hooks/useHook"

const App = () => {
  const [joke, setJoke] = useState(null)

  const { data, fetchData } = useHook()

  const handleClick = async () => {
    await fetchData()
    setJoke(data)
  }

  return (
    <div>
      <button onClick={handleClick}>Genrate Joke</button>
      <p>{joke}</p>
    </div>
  )
}

export default App
