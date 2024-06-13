import React from "react"
import Login from "./pages/Login"
import { BrowserRouter as ParshuBabu, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <ParshuBabu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ParshuBabu>
  )
}

export default App
