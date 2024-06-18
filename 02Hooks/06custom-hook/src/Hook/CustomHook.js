import React, { useState } from "react"

function CustomHook() {
  const [Data, setData] = useState("")
  const fetchData = async () => {
    const res = await fetch(`https://official-joke-api.appspot.com/random_joke`)
    const jockData = await res.json()
    setData(jockData.punchline)
    return
  }
  return { Data, fetchData }
}

export default CustomHook
