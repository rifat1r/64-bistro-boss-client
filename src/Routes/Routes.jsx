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
import AddItems from "../page/DashBoard/AddItems/AddItems";
import AdminRoute from "../Routes/AdminRoute";
import ManageItems from "../page/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../page/DashBoard/UpdateItem/UpdateItem";
import Payment from "../page/DashBoard/Payment/Payment";
import PaymentHistory from "../page/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../page/DashBoard/AdminHome/AdminHome";
import UserHome from "../page/DashBoard/UserHome/UserHome";

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
      //normal users routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin only routes
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://65-bistro-boss-server-gamma.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
