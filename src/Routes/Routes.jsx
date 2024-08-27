import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home";
import Menu from "../page/Menu/Menu/Menu";
import Order from "../page/order/Order/Order";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Cart from "../page/DashBoard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Layout/Dashboard/DashBoard";
import AllUsers from "../page/DashBoard/AllUsers/AllUsers";

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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: `/order/:category`,
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router;
