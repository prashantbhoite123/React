import React from "react"
import Header from "./components/headers/Header"
import Footer from "./components/footers/footer"
import { Outlet } from "react-router-dom"

const Cover = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Cover
