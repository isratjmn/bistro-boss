import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [cart] = useCart();

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.log(error));
	};
	const navOptions = (
		<>
			<li>
				<Link
					to="/"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Home
				</Link>
			</li>

			<li>
				<Link
					to="/menu"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Our Menu
				</Link>
			</li>
			<li>
				<Link
					to="/order/salad"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Order Food
				</Link>
			</li>
			<li>
				<Link
					to="/secret"
					className="text-black lg:text-white font-semibold text-lg"
				>
					Secret
				</Link>
			</li>
		
			
			<li>
				<Link
					to="/dashboard/mycart"
					className="text-black lg:text-white font-semibold text-lg"
				>
					<button className="btn gap-2">
						<HiOutlineShoppingCart className="text-2xl" />
						<div className="badge badge-secondary">
							+{cart?.length || 0}
						</div>
					</button>
				</Link>
			</li>

			{user ? (
				<>
					<span>{user?.displayName}</span>
					<button
						onClick={handleLogOut}
						className="btn btn-active btn-ghost"
					>
						LogOut
					</button>
				</>
			) : (
				<>
					<li>
						<Link
							to="/login"
							className="text-black lg:text-white font-semibold text-lg"
						>
							Login
						</Link>
					</li>
				</>
			)}
		</>
	);

	return (
		<div>
			<div className="navbar fixed z-10 max-w-screen-2xl bg-opacity-30  bg-black text-white">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							{navOptions}
						</ul>
					</div>
					<a className="btn btn-ghost md:text-white font-bold normal-case text-2xl">
						Bistro Boss
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{navOptions}</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Get started</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
