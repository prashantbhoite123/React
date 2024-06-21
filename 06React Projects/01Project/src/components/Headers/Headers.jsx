import React from "react"
import "../styles/Header.scss"

import { Link } from "react-router-dom"

function Headers() {
  return (
    <nav className="navbar">
      <h1 className="navlogo">Prashu</h1>
      <main className="navitem">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/about"}>About</Link>
        </li>

        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>

        <li>
          <Link to={"/services"}>Services</Link>
        </li>

        <li>
          <Link to={"/blogs"}>Blogs</Link>
        </li>
      </main>
    </nav>
  )
}

export default Headers
