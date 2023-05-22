import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/HomePage/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import About from "../../Pages/AboutPage/About/About";
import Contact from "../../Pages/ContactPage/Contact/Contact";
import Login from "../../Pages/SharePage/Login/Login";
import Signup from "../../Pages/SharePage/Signup/Signup";
import Products from "../../Pages/ProductsPage/Products/Products";
import Blog from "../../Pages/BlogPage/Blog/Blog";
import ProductsBody from "../../Pages/ProductsPage/ProductsBody/ProductsBody";

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
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <ProductsBody />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products?category=${params.category}`),
      },
    ],
  },
]);

export default router;
