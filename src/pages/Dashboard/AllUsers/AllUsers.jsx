import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";
import { HiTrash } from "react-icons/hi2";
import Swal from "sweetalert2";

const AllUsers = () => {
	const { data: users = [], refetch } = useQuery(["users"], async () => {
		const res = await fetch("http://localhost:7000/users");
		return res.json();
	});

	const handleMakeAdmin = (user) => {
		fetch(`http://localhost:7000/users/admin/${user._id}`, {
			method: "PATCH",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: `${user.name} is an Admin Now`,
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const handleDelete = (user) => {};
	return (
		<div className="w-full">
			<Helmet>
				<title>Bistro | All Users</title>
			</Helmet>
			<h3 className="text-3xl font-bold mb-4">
				Total Users: {users.length}
			</h3>

			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={user._id}>
								<th>{index + 1}</th>
								<td>
									<div className="flex items-center space-x-3">
										<div className="font-bold">
											{user.name}
										</div>
									</div>
								</td>
								<td>{user.email}</td>
								<td>
									{user.role === "admin" ? (
										"admin"
									) : (
										<button
											onClick={() =>
												handleMakeAdmin(user)
											}
											className="btn btn-ghost btn-md bg-[#f0b151]"
										>
											<FaUserShield className="text-2xl text-white" />
										</button>
									)}
								</td>
								<th>
									<button
										onClick={() => handleDelete(user)}
										className="btn btn-ghost btn-md bg-red-600"
									>
										<HiTrash className="text-2xl text-white" />
									</button>
								</th>
							</tr>
						))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

export default AllUsers;
