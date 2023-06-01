import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
	const { _id, name, recipe, image, category, price } = item;
	const { user } = useContext(AuthContext);
	const [, refetch] = useCart();
	const navigate = useNavigate();
	const location = useLocation();

	const handleAddToCart = (item) => {
		console.log(item);
		if (user && user.email) {
			const cartItem = {
				menuItemId: _id,
				name,
				image,
				price,
				email: user.email,
			};
			fetch("http://localhost:7000/carts", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(cartItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						// Refetch cart to update the number of Items in the cart
						refetch();
						Swal.fire({
							position: "top-end",
							icon: "success",
							title: "Food Added On the Cart",
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
		} else {
			Swal.fire({
				title: "Please Login to Order the Food..",

				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
	};

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
						onClick={() => handleAddToCart(item)}
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
