import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className="bg-[#1F2937] py-14">
				<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
					{/* Contact Us Column */}
					<div className="text-white px-4 mb-6 md:text-center">
						<h3 className="text-2xl font-bold mb-6">Contact Us</h3>
						<p>123 Main St, City</p>
						<p>(123) 456-7890</p>
						<p>info@example.com</p>
					</div>

					{/* Follow Us Column */}
					<div className="text-white px-4 mb-6">
						<h3 className="text-2xl font-bold mb-6">Follow Us</h3>
						<p>Join us on social media</p>
						<ul className="flex space-x-4 mt-6">
							<li>
								<Link
									href="#"
									className="text-gray-400 hover:text-white"
								>
									<FaFacebook size={24} />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-400 hover:text-white"
								>
									<FaTwitter size={24} />
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-400 hover:text-white"
								>
									<FaInstagram size={24} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* Horizontal Line */}
				<hr className="border-gray-600 my-6" />

				{/* Copyright Footer */}
				<div className="container mx-auto text-center text-gray-400">
					&copy; {new Date().getFullYear()} Your Restaurant Name. All
					rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default Footer;
