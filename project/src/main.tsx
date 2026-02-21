import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app/App" // si tu App está dentro de app

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
