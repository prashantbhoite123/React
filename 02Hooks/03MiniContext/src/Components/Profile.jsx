import React, { useContext } from "react"
import UserContext from "../Context/User.context"

function Profile() {
  const { user } = useContext(UserContext)
  if (!user) return <div className="text-center">Please Login</div>
  return <div className="text-center my-93">Wellcome {user.username}</div>
}

export default Profile
