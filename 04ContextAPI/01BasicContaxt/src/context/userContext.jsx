import { createContext, useContext, useState } from "react"

const UserContaxt = createContext()

export const useUserContaxt = () => {
  return useContext(UserContaxt)
}

export const UserContaxtProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <UserContaxt.Provider value={{ user, setUser }}>
      {children}
    </UserContaxt.Provider>
  )
}
