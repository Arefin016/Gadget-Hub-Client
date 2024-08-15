import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import { RouterProvider } from "react-router-dom"
import router from "./Routes/Router.jsx"
import AuthProvider from "./providers/AuthProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>
  </StrictMode>
)
