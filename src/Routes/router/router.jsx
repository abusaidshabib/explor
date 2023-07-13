import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Default from "../../Pages/Dashboard/Default/Default";
import Analytics from "../../Pages/Dashboard/Analytics/Analytics";
import Login from "../../Pages/Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element:<PrivateRouter> <Dashboard></Dashboard></PrivateRouter>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Default></Default>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "default",
        element: <Default></Default>,
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
        errorElement: <ErrorPage></ErrorPage>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
])

export default router;