import React from "react";
import FoodCard from "../../../components/Foodcard/FoodCard";

const Ordertab = ({ items }) => {
	return (
		<div className="w-full md:w-[85%] lg:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto my-16">
			{items.map((item) => (
				<FoodCard key={item._id} item={item}></FoodCard>
			))}
		</div>
	);
};

export default Ordertab;
