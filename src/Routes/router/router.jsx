import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Default from "../../Pages/Dashboard/Default/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
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
      }
    ]
  }
])

export default router;