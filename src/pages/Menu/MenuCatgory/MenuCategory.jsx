import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
	return (
		<div className="pt-8">
			{title && <Cover title={title} img={img}></Cover>}
			<div className="w-[80%] grid md:grid-cols-2  gap-14 mx-auto my-16">
				{items.map((item) => (
					<MenuItem key={item._id} item={item}></MenuItem>
				))}
			</div>
			<Link to={`/order/${title}`}>
				<button
					className="px-6 py-3 rounded-md btn btn-outline border-0
                        border-b-4 mt-4"
				>
					ORDER NOW
				</button>
			</Link>
		</div>
	);
};

export default MenuCategory;
