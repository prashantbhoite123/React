import React, { Children } from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

function MYApp() {
  return (
    <div>
      <h1>Prashant Bhoite Iam From Pathardi </h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit google",
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
)

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit Google"
// )

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_id" },
  "Click me to visit Google"
)
ReactDOM.createRoot(document.getElementById("root")).render(reactElement)
