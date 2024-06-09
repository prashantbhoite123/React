import React, { useEffect, useState } from "react"

function Github() {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data)
        setdata(data)
      })
  })
  return (
    <div className="bg-green-400 text-white text-center text-2xl px-6 ">
      Github Followers :{data.followers}
    </div>
  )
}

export default Github
