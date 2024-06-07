import { useState, useCallback, useEffect } from "react"

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Passowrd, setPassword] = useState(" ")

  const PassowrdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*()_+<>?:{}|~?/,"

    for (let i = 0; i <= length.length; i++) {
      let char = Math.floor(Math.random() + str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    PassowrdGenerator()
  }, [length, numberAllowed, charAllowed, PassowrdGenerator])
  return (
    <>
      <div>
        <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8  bg-gray-700">
          <h1 className="text-center font-semibold text-2xl text-orange-400 my-6">
            Password Generator
          </h1>
          <div className="flex my-4">
            <input
              type="text"
              value={Passowrd}
              placeholder="Password"
              className="w-full h-full rounded-s font-semibold text-lg py-2 px-1 overflow-hidden outline-none"
              readOnly
            />
            <button className="outline-none  bg-blue-400 text-white  rounded-e px-2 font-semibold">
              Copy
            </button>
          </div>
          <div className="py-3 flex gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value)
              }}
              readOnly
            />
            <label className="text-orange-400">lenght :{length}</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
                className="ml-2"
              />
              <label className="mx-1 text-orange-400">Numbers</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="Charectorinput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
                className="ml-2"
              />
              <label className="mx-1 text-orange-400">Charector</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
