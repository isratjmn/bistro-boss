import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
	const location = useLocation();
	const noHeaderFooter =
		location.pathname.includes("login") ||
		location.pathname.includes("signup");
	return (
		<div>
			{noHeaderFooter || <NavBar />}
			<Outlet />
			{noHeaderFooter || <Footer />}
		</div>
	);
};

export default MainLayout;
