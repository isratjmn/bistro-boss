import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import signupImg from "../../assets/login/signup.png";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		createUser(data.email, data.password).then((result) => {
			const loggedUser = result.user;
			console.log(loggedUser);

			updateUserProfile(data.name, data.photoURL)
				.then(() => {
					const saveUser = { name: data.name, email: data.email };
					fetch("http://localhost:7000/users", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(saveUser),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.insertedId) {
								reset();
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "User Created Successfully",
									showConfirmButton: false,
									timer: 1500,
								});
								navigate("/");
							}
						});
				})
				.catch((error) => console.log(error));
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro | SignUp</title>
			</Helmet>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col-reverse lg:flex-row">
					<div className="text-center lg:text-left">
						<img src={signupImg} alt="signup" />
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<h1 className="text-4xl font-bold mt-10 text-center">
							Signup!
						</h1>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="card-body"
						>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									name="name"
									{...register("name", { required: true })}
									placeholder="Name"
									className="input input-bordered"
								/>
								{errors.name && (
									<span className="text-red-700 font-semibold mt-2">
										Name is Required
									</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Photo URL
									</span>
								</label>
								<input
									type="text"
									{...register("photoURL", {
										required: true,
									})}
									placeholder="photo URL"
									className="input input-bordered"
								/>
								{errors.photoURL && (
									<span className="text-red-700 font-semibold mt-2">
										Photo URL is Required
									</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									{...register("email", { required: true })}
									placeholder="Email"
									className="input input-bordered"
								/>
								{errors.email && (
									<span className="text-red-700 font-semibold mt-2">
										Email is Required
									</span>
								)}
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									{...register("password", {
										required: true,
										minLength: 6,
										maxLength: 20,
										pattern:
											/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									placeholder="password"
									className="input input-bordered"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-700 font-semibold mt-2">
										Password is Required
									</p>
								)}
								{errors.password?.type === "minLength" && (
									<p className=" text-red-700 font-semibold mt-2">
										Password Must be 6 Characters
									</p>
								)}
								{errors.password?.type === "maxLength" && (
									<p className="text-red-700 font-semibold mt-2">
										Password Must be less than 20 Characters
									</p>
								)}
								{errors.password?.type === "pattern" && (
									<p className="text-red-700 font-semibold mt-2">
										Password Must Have One Uppercase, One
										Lowercase, One Number & One Special
										Character.{" "}
									</p>
								)}
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<input
									className="btn btn-primary"
									type="submit"
									value="Sign Up"
								/>
							</div>
							<small className="mx-auto my-4 text-base"> Already Have an Account?  Please 
							<Link
								to="/login"
								className="text-red-700 font-bold"
							>
								{" "}
								Login..
							</Link>
						</small>
							<SocialLogin />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
