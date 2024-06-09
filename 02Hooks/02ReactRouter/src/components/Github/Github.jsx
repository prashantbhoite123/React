import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
  const data = useLoaderData()
  //   const [data, setdata] = useState([])
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((responce) => responce.json())
  //       .then((data) => {
  //         console.log(data)
  //         setdata(data)
  //       })
  //   })
  return (
    <div className="bg-green-400 text-white text-center text-2xl px-6 ">
      Github Followers :{data.followers}
      <img src={data.avatar_url} alt="git picture" width={400} />
    </div>
  )
}

export default Github

export const githubInfoLoder = async () => {
  const responce = await fetch("https://api.github.com/users/hiteshchoudhary")
  return responce.json()
}
