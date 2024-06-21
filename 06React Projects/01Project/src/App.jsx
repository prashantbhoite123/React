import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Headers from "./components/Headers/Headers.jsx"
import "./components/styles/App.scss"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx"
import Blogs from "./components/Blogs.jsx"

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App
