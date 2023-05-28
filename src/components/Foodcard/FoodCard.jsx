import React from "react";

const FoodCard = ({ item }) => {
	const { name, recipe, image, category, price } = item;

	return (
		<div className="card w-full sm:w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={image} alt="img" />
			</figure>
			<button className="absolute right-0 mr-4 mt-4 btn gap-2">
				${price}
			</button>
			<div className="card-body flex flex-col items-center">
				<h2 className="card-title font-bold">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions flex justify-end">
					<button
						className="px-6 py-3 rounded-md btn btn-outline border-0 bg-slate-100
                        border-b-4 border-orange-400 mt-4"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
