import React from "react";

const MenuItem = ({ item }) => {
	const { name, recipe, image, category, price } = item;
	return (
		<div className="flex space-x-2 mb-10">
			<img style={{borderRadius: '0 200px 220px 200px'}} className="w-[150px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name} -----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 font-bold text-lg">${price}</p>
		</div>
	);
};

export default MenuItem;
