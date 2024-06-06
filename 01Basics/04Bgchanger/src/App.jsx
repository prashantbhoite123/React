import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

const colors = ["red", "green", "blue", "pink", "purple"]

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div
        className="w-full relative h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-auto p-2 absolute bottom-5 left-[50%] z-10 bg-slate-600 rounded-xl">
          {colors.map((color) => (
            <button
              className="m-2 rounded-lg px-5 py-2"
              style={{
                backgroundColor: color,
              }}
              onClick={() => setColor(color)}
            >
              {color}
            </button>
          ))}
         
        </div>
      </div>
    </>
  )
}

export default App
