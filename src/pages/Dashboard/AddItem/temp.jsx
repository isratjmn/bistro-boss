import React from "react";
import { useForm } from "react-hook-form";

const RecipeForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
		>
			<div className="mb-4">
				<label htmlFor="recipeName" className="block font-medium mb-1">
					Recipe Name
				</label>
				<input
					type="text"
					id="recipeName"
					{...register("recipeName", {
						required: "Recipe Name is required",
					})}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
				/>
				{errors.recipeName && (
					<span className="text-red-500">
						{errors.recipeName.message}
					</span>
				)}
			</div>

			<div className="mb-4">
				<label htmlFor="category" className="block font-medium mb-1">
					Category
				</label>
				<input
					type="text"
					id="category"
					{...register("category", {
						required: "Category is required",
					})}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
				/>
				{errors.category && (
					<span className="text-red-500">
						{errors.category.message}
					</span>
				)}
			</div>

			<div className="mb-4">
				<label htmlFor="price" className="block font-medium mb-1">
					Price
				</label>
				<input
					type="number"
					id="price"
					{...register("price", { required: "Price is required" })}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
				/>
				{errors.price && (
					<span className="text-red-500">{errors.price.message}</span>
				)}
			</div>

			<div className="mb-4">
				<label
					htmlFor="recipeDetails"
					className="block font-medium mb-1"
				>
					Recipe Details
				</label>
				<textarea
					id="recipeDetails"
					{...register("recipeDetails", {
						required: "Recipe Details are required",
					})}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
				/>
				{errors.recipeDetails && (
					<span className="text-red-500">
						{errors.recipeDetails.message}
					</span>
				)}
			</div>

			<div className="mb-4">
				<label htmlFor="file" className="block font-medium mb-1">
					Choose File
				</label>
				<input
					type="file"
					id="file"
					{...register("file")}
					className="w-full"
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
			>
				Submit
			</button>
		</form>
	);
};

export default RecipeForm;
