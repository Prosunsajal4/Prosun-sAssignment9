import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Skill from "../pages/Skill/Skill";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Addict from "../pages/Addict/Addict";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/skill/:id",
        element: (
          <PrivateRoute>
            <Skill />
          </PrivateRoute>
        ),
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/addict",
        element: <Addict />,
      },
    ],
  },
]);

export default router;
