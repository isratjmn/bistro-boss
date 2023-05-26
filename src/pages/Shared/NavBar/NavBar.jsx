import React, { useState } from "react";

const NavBar = () => {
	const navOptions =  
    <>
        <li>
            <a className="text-black md:text-white font-semibold text-lg">Home</a>
        </li>
        <li tabIndex={0}>
            <a className="justify-between text-black md:text-white font-semibold text-lg">
                Contact Us
                <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </a>
            <ul className="p-2">
                <li>
                    <a>Submenu 1</a>
                </li>
                <li>
                    <a>Submenu 2</a>
                </li>
            </ul>
        </li>
        <li>
            <a className="text-black md:text-white font-semibold text-lg">Our Menu</a>
        </li>
        <li>
            <a className="text-black md:text-white font-semibold text-lg">Dashboard</a>
        </li>
    </>
	
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
					<a className="btn btn-ghost md:text-white font-bold normal-case text-2xl">Bistro Boss</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
                    {navOptions}
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn">Get started</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;