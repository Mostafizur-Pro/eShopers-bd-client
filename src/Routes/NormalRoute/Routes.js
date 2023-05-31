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
import Deshboard from "../../Layout/Deshboard/Deshboard";
import AdminDeshboard from "../../Pages/SharePage/AdminDeshboard/AdminDeshboard";
import AllUser from "../../Pages/SharePage/AllUser/AllUser";
import AddProducts from "../../Pages/SharePage/AddProducts/AddProducts";
import MyProducts from "../../Pages/SharePage/MyProducts/MyProducts";
import Profile from "../../Pages/SharePage/Profile/Profile";
import PrivateRoute from "../../Pages/SharePage/PrivateRoute/PrivateRoute";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/products/:category",
        element: <ProductsBody />,
        loader: ({ params }) =>
          fetch(
            `https://e-shoppers-bd-server-dmq5bw2u1-mostafizur-pro.vercel.app/products?category=${params.category}`
          ),
      },
    ],
  },
  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <Deshboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/deshboard/admin",
        element: <AdminDeshboard />,
      },
      {
        path: "/deshboard/allUser",
        element: <AllUser />,
      },
      {
        path: "/deshboard/addproducts",
        element: <AddProducts />,
      },
      {
        path: "/deshboard/myproducts",
        element: <MyProducts />,
      },
    ],
  },
]);

export default router;
