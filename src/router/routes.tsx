// src/router/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Components from "../pages/Components";
import Color from "@/pages/Color";
import Illustration from "@/pages/Illustration";
import Developer from "@/pages/Developer";
import Animation from "@/pages/Animation";
import Api from "@/pages/Api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "components",
        element: <Components />,
      },
      {
        path: "color",
        element: <Color />,
      },
      {
        path: "illustrations",
        element: <Illustration />,
      },
      {
        path: "developer",
        element: <Developer />,
      },
      {
        path: "animation",
        element: <Animation />,
      },
      {
        path: "api",
        element: <Api />,
      },
    ],
  },
]);

export default router;
