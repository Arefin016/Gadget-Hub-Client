import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import Registration from "../pages/Registration/Registration"
import Login from "../pages/Login/Login"
import AllCategories from "../pages/AllCategories/AllCategories"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allCategories",
        element: (
          <PrivateRoute>
            <AllCategories></AllCategories>
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
