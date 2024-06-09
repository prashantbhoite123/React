import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContaxtProvoider from "./Context/UserContextProvoider"

function App() {
  return (
    <>
      <UserContaxtProvoider>
        <h1 className="text-center mt-3 font-semibold text-xl text-emerald-600">
          Mini_Contacts
        </h1>
        <Login />
        <Profile />
      </UserContaxtProvoider>
    </>
  )
}

export default App
