import React, { useContext, useState } from "react"
import { useUserContaxt } from "../context/userContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const { setUser } = useUserContaxt()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(formdata)
    navigate("/")
  }
  return (
    <div
      style={{
        marginLeft: "350px",
        padding: "10px",
      }}
    >
      <h1 className="m-5"> Login </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          onChange={(e) =>
            setFormdata({ ...formdata, username: e.target.value })
          }
          value={formdata.username}
          type="text"
          className="mx-3 px-4 py-1"
          placeholder="enter username"
        />

        <input
          value={formdata.email}
          onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
          type="email"
          placeholder="enter email"
          className="mx-3 px-4 py-1"
        />

        <input
          value={formdata.password}
          onChange={(e) =>
            setFormdata({ ...formdata, password: e.target.value })
          }
          type="password"
          placeholder="enter email"
          className="mx-3 px-4 py-1"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
