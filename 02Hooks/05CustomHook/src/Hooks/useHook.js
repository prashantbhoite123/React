import { useState } from "react"

const useHook = () => {
  const [data, setData] = useState("")

  const fetchData = async () => {
    const res = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    const jokeData = await res.json()
    setData(jokeData.punchline)
    return
  }
  return { data, fetchData }
}

export default useHook
