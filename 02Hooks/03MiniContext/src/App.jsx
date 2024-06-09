import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContaxtProvoider from "./Context/UserContextProvoider"

function App() {
  return (
    <>
      <UserContaxtProvoider>
        <h1 className="bg-purple-500 text-2xl">Prashant Balasaheb Bhoite</h1>
        <Login />
        <Profile />
      </UserContaxtProvoider>
    </>
  )
}

export default App
