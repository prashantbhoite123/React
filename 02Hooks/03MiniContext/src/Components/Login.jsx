import React, { useState, useContext } from "react"
import UserContext from "../Context/User.context"
function Login() {
  const [username, setusername] = useState("")
  const [Password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)
  const handoSubmit = (e) => {
    e.preventDefault()
    setUser({ username, Password })
  }

  return (
    <div className="text-center">
      <h2>Login </h2>
      <div className="py-5">
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="username"
          className="px-4 border-solid bg-gray-600 text-white"
        />
        <input
          type="text"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-4 border-solid bg-gray-600 mx-3 text-white"
        />
        <button
          onClick={handoSubmit}
          className="text-center bg-green-500 px-3 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login
