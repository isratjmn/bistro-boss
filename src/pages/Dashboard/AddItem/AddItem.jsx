import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

	const onSubmit = (data) => {
		const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
        })
	};
	console.log(img_hosting_token);
	return (
		<div className="w-full">
			<SectionTitle
				subHeading="What's New"
				heading="Add an item"
			></SectionTitle>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-2xl mx-auto p-10 bg-white shadow-md rounded-md"
			>
				<div className="mb-4">
					<label
						htmlFor="recipeName"
						className="block font-medium mb-1"
					>
						Recipe Name
					</label>
					<input
						type="text"
						name="name"
						placeholder="Receipe Name"
						{...register("name", {
							required: true,
							maxLength: 120,
						})}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
						required
					/>
				</div>

				<div className="flex gap-4">
					<div class="mb-4 w-full">
						<label
							htmlFor="category"
							className="block font-medium mb-1"
						>
							{" "}
							Category
						</label>
						<select
							defaultValue="Pick One"
							{...register("category", {
								required: "Category is required",
							})}
							className="select select-bordered w-full"
						>
							<option disabled>Pick One</option>
							<option>Pizza</option>
							<option>Soup</option>
							<option>Salad</option>
							<option>Dessert</option>
							<option>Drinks</option>
						</select>
					</div>

					<div className="mb-4 w-full">
						<label
							htmlFor="price"
							className="block font-medium mb-1"
						>
							{" "}
							Price
						</label>
						<input
							type="number"
							name="price"
							{...register("price", {
								required: true,
							})}
							className="w-full px-3  py-[10px] border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
							required
						/>
					</div>
				</div>

				<div className="mb-4">
					<label
						htmlFor="recipeDetails"
						className="block font-medium mb-1"
					>
						{" "}
						Recipe Details
					</label>
					<textarea
						name="recipe"
						{...register("recipe", {
							required: true,
						})}
						className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
						required
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="file" className="block font-medium mb-1">
						Item Image
					</label>

					<input
						type="file"
						{...register("image", {
							required: true,
						})}
						class="file-input file-input-bordered file-input-warning w-full max-w-xs"
					/>
				</div>
				<input
					type="submit"
					className="w-[25%] bg-[#B58130] text-white py-3 text-xl px-4 rounded-0 hover:bg-blue-600"
					value="Add Items"
				/>
			</form>
		</div>
	);
};

export default AddItem;
