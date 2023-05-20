import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/HomePage/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import About from "../../Pages/AboutPage/About/About";
import Contact from "../../Pages/ContactPage/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
