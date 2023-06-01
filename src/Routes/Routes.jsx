import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "menu",
				element: <Menu />,
			},
			{
				path: "order/:category",
				element: <Order />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "signup",
				element: <SignUp />,
			},
			{
				path: "secret",
				element: (
					<PrivateRoute>
						<Secret></Secret>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: "mycart",
				element: <MyCart />,
			},
			{
				path: "allusers",
				element: <AllUsers />,
			},
		],
	},
]);
