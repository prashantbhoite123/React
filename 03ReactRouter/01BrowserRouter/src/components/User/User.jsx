import React from "react"
import { useParams } from "react-router-dom"

function User() {
  const { userid } = useParams()
  return (
    <div className="text-center bg-gray-600 text-3xl px-4 w-auto text-white">
   
      User : {userid}
    </div>
  )
}

export default User
