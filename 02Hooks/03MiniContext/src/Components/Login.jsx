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
    <div className="flex justify-center my-12">
      <div className="text-center w-auto bg-orange-300 max-w-72">
        <h2 className="text-xl font-semibold">Login</h2>
        <div className="py-5">
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="username"
            className="px-4  pyborder-solid bg-gray-600 text-white my-3"
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
            className="text-center bg-green-500 px-3 my-2 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
