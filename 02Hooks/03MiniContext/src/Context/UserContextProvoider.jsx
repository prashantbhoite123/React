import React, { useState } from "react"
import UserContext from "./User.context.js"

const UserContaxtProvoider = ({ children }) => {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContaxtProvoider
