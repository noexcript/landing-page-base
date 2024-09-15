import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Project from "./Project";
import About from "./About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])


export default router