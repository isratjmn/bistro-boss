import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {
	HiOutlineWallet,
	HiCalendarDays,
	HiHome,
	HiBars3CenterLeft,
	HiShoppingBag,
	HiUserGroup,
	HiEnvelope,
} from "react-icons/hi2";
import { BiBookBookmark } from "react-icons/bi";
import useCart from "../hooks/useCart";
import { FaUtensils } from "react-icons/fa";

const Dashboard = () => {
	const [cart] = useCart();

	//! TODO:
	const isAdmin = true;
	return (
		<div>
			<div className="drawer drawer-mobile">
				<input
					id="my-drawer-2"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content flex flex-col items-center justify-center">
					<Outlet />
					<label
						htmlFor="my-drawer-2"
						className="btn btn-primary drawer-button lg:hidden"
					>
						Open drawer
					</label>
				</div>
				<div className="drawer-side bg-[#f0b151]">
					<label
						htmlFor="my-drawer-2"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80">
						{isAdmin ? (
							<>
								<li>
									<NavLink to="/dashboard/home">
										<HiHome className="text-xl" /> Admin
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/reservetions">
										<FaUtensils className="text-xl" /> Add
										Items
									</NavLink>
								</li>

								<li>
									<NavLink to="/dashboard/history">
										<HiOutlineWallet className="text-xl" />{" "}
										Manage Items
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/history">
										<BiBookBookmark className="text-xl" />{" "}
										Manage Bookings
									</NavLink>
								</li>
								<li>
									<NavLink to="/dashboard/allusers">
										<HiUserGroup className="text-xl" />{" "}
										All Users
									</NavLink>
								</li>


								{/* <li>
									<NavLink to="/dashboard/mycart">
										<HiOutlineShoppingCart className="text-xl" />{" "}
										My Cart{" "}
										<span className="badge badge-secondary">
											+{cart?.length || 0}
										</span>
									</NavLink>
								</li> */}
							</>
						) : (
							<></>
						)}

						<div className="divider text-gray-950"></div>
						<li>
							<NavLink to="/menu">
								<HiBars3CenterLeft className="text-xl" /> Our
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink to="/order/salad">
								<HiShoppingBag className="text-xl" /> Order Food
							</NavLink>
						</li>
						<li>
							<NavLink>
								<HiEnvelope className="text-xl" /> Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
