import React from "react"
import { Link } from "react-router-dom"
import { useUserContaxt } from "../context/userContext"

const Home = () => {
  const { user } = useUserContaxt()
  console.log(user.username)
  return (
    <div>
      <h1>Home Page</h1>

      {user ? (
        <div>
          <ul>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.password}</li>
          </ul>
        </div>
      ) : (
        <Link to={"/login"}>
          <button>Go to Login</button>
        </Link>
      )}
    </div>
  )
}

export default Home
