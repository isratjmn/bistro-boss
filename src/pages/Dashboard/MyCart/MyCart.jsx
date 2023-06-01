import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { HiTrash } from "react-icons/hi2";
import Swal from "sweetalert2";

const MyCart = () => {
	const [cart, refetch] = useCart();
	console.log(cart);
	const total = cart.reduce((sum, item) => item.price + sum, 0);

	const handleDelete = (item) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:7000/carts/${item._id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire(
								"Deleted!",
								"Your file has been deleted.",
								"success"
							);
						}
					});
			}
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro | My Cart</title>
			</Helmet>
			<div className="uppercase font-bold flex gap-x-10 ps-6 me-auto lg:gap-x-36 mb-4 items-center">
				<h2 className="text-2xl">Total Items: {cart.length}</h2>
				<h2 className="text-2xl">Total Price: ${total}</h2>
				<button class="btn btn-warning btn-small font-bold">PAY</button>
			</div>
			<div className="overflow-x-auto w-full p-6">
				<table className="table w-full">
					{/* Head */}

					<thead>
						<tr>
							<th>#</th>
							<th>Food</th>
							<th>Item Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{cart.map((item, index) => (
							<tr key={item._id}>
								<td>{index + 1}</td>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img src={item.image} />
											</div>
										</div>
									</div>
								</td>
								<td>{item.name}</td>
								<td className="text-end">${item.price}</td>
								<td>
									<button
										onClick={() => handleDelete(item)}
										className="btn btn-ghost btn-md bg-red-600"
									>
										<HiTrash className="text-2xl text-white" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MyCart;
