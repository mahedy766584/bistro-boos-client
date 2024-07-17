import ErrorPage from "../Error/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "../Components/Provider/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../Components/Provider/AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";


const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <div>Error.....</div>,
        children: [
            //normal user routes
            {
                path: "userHome",
                element: <UserHome/>
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "payment",
                element: <Payment/>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory/>
            },

            // admin routes only
            {
                path: "adminHome",
                element: <AdminRoutes><AdminHome/></AdminRoutes>
            },
            {
                path: "addItems",
                element: <AdminRoutes> <AddItems /></AdminRoutes>
            },
            {
                path: "manageItems",
                element: <ManageItems />
            },
            {
                path: "updateItems/:id",
                element: <AdminRoutes><UpdateItems /></AdminRoutes>,
                loader: ({params}) => fetch(`http://localhost:9000/menu/${params.id}`)
                // loader: ({params}) => fetch(`https://bistrobossserver.vercel.app/menu/${params.id}`)
            },
            {
                path: "allUsers",
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            }
        ]
    },
]);

export default myRoutes;